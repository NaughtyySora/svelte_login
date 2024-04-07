<script lang="ts">
  import { timer } from "$lib/timer";
  import { onMount } from "svelte";

  export let level = "success";
  export let onRemove: () => void;
  export let deltaDelay: number = 0;

  const delay = 5000 + deltaDelay;

  let fadeTimeOut = () => {};
  let ref: null | HTMLDivElement = null;

  onMount(() => {
    const { set, cancel } = timer(100);
    set(setActive, "add");

    const cancelRemoveToast = removeToast(delay);
    return () => {
      cancel();
      cancelRemoveToast();
    };
  });

  const setActive = (method: "add" | "remove") => {
    ref?.classList[method]("active");
  };

  function removeToast(ms: number) {
    const { set, cancel } = timer(ms);

    set(() => {
      setActive("remove");
      setTimeout(onRemove, 300);
    });

    fadeTimeOut = cancel;
    return cancel;
  }
</script>

<div
  class={`Toast ${$$props.class} ${level}`}
  bind:this={ref}
  on:mouseenter={fadeTimeOut}
  on:mouseleave={removeToast.bind(null, delay)}
>
  <p class="Toast-level">{level}</p>

  <button
    class="Toast-close"
    aria-label="close toaster"
    on:click={() => removeToast(100)}
  />

  <slot />
</div>

<style>
  .Toast {
    position: relative;
    width: 350px;
    padding: 1.25rem;
    background-color: var(--black);
    color: var(--white);
    border-radius: 2px;
    font-size: var(--fSize16);
    font-weight: 400;
    transform: translateX(200%);
    transition:
      transform 0.3s ease,
      outline 0.1s ease;
  }

  .Toast:hover {
    outline-width: 3px !important;
  }

  .Toast.active {
    transform: translateX(0);
  }

  .Toast.error {
    outline: 1px solid var(--red);
  }

  .Toast.error .Toast-level,
  .Toast.error .Toast-close::before {
    color: var(--red);
  }

  .Toast.success {
    outline: 1px solid var(--blue);
  }

  .Toast.success .Toast-level,
  .Toast.success .Toast-close::before {
    color: var(--blue);
  }

  .Toast:not(&:last-child) {
    margin-bottom: 1rem;
  }

  .Toast-level {
    font-size: var(--fSize18);
    font-weight: 500;
    margin-bottom: 0.75rem;
    text-transform: capitalize;
    line-height: 1.1;
  }

  .Toast-close {
    padding: 0.5rem;
    position: absolute;
    top: -8px;
    right: 0;
    cursor: pointer;
    margin: 0.25rem;
    background-color: transparent;
  }

  .Toast-close::before {
    content: "\271A";
    font-size: var(--fSize28);
    transform: rotate(45deg);
    list-style: 1;
    display: inline-block;
  }
</style>
