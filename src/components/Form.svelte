<script lang="ts">
  import Icon from "./Icon.svelte";

  export let title = "";
  export let buttonTitle = "";
  export let onSubmit: null | OnSubmit = null;

  type FormEvent = Event & { currentTarget: HTMLFormElement };
  type OnSubmit = (e: FormEvent) => void;
</script>

<form
  {...$$restProps}
  class={`Form ${$$props.class || ""}`}
  on:submit|preventDefault={onSubmit}
>
  {#if title}
    <h2 class="Form-title">{title}</h2>
  {/if}

  <div class="Form-socials">
    <a href="/" class="Form-socials-item">
      <Icon name="facebook" />
    </a>
    <a href="/" class="Form-socials-item">
      <Icon name="google" />
    </a>
    <a href="/" class="Form-socials-item">
      <Icon name="linkedin" />
    </a>
  </div>

  <slot />

  <button class="Form-submit" type="submit">
    {buttonTitle}
  </button>
</form>

<style>
  .Form {
    max-width: 50%;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .Form-title {
    font-size: var(--fSize32);
    color: var(--black);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .Form-socials {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 auto 1.5rem auto;
    max-width: fit-content;
  }

  .Form-socials-item {
    border: 1px solid var(--white_30);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.35rem;
  }

  .Form-submit {
    background-color: var(--red);
    padding: 0.825rem 1.25rem;
    font-size: var(--fSize14);
    color: var(--white);
    border-radius: 2rem;
    min-width: 150px;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    margin: 1.5rem auto 0 auto;
  }
</style>
