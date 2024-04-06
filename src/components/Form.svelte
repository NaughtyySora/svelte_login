<script lang="ts">
  import Icon from "./Icon.svelte";

  export let title = "";
  export let buttonTitle = "";
  export let onSubmit: null | OnSubmit = null;

  type FormEvent = Event & { currentTarget: HTMLFormElement };
  type OnSubmit = (e: FormEvent) => void;
</script>

<form class="Form" on:submit|preventDefault={onSubmit}>
  <h2 class="Form-title">{title}</h2>

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
    
  }
</style>
