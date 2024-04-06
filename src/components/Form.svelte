<script lang="ts">
  import Icon from "./Icon.svelte";

  export let title = "";
  export let buttonTitle = "";
  export let onSubmit: null | OnSubmit = null;

  type FormEvent = Event & { currentTarget: HTMLFormElement };
  type OnSubmit = (e: FormEvent) => void;
</script>

<div class="Form-container">
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
</div>

<style>
  .Form {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .Form-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 50%;
  }

  .Form.SignIn:not(.left),
  .Form.SignUp:not(.right) {
    animation: index .65s ease-in-out 0.5s 1 alternate forwards;
  }

  .Form.SignUp {
    transform: translate(-100%);
    transition: transform .65s;
  }

  .Form.SignUp.left,
  .Form.SignIn.right {
    transform: translate(0);
  }

  .Form.SignIn {
    transform: translate(100%);
    transition: transform .65s;
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

  @keyframes index {
    from {
      z-index: 0;
    }

    to {
      z-index: 10;
    }
  }
</style>
