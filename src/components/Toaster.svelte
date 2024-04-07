<script lang="ts">
  import { removeToast, toasts } from "../stores/toast-store";
  import Toast from "./Toast.svelte";

</script>

<section class="Toaster">
  {#each $toasts as { content, id, level, deltaDelay = 300 }, idx (id)}
    <Toast
      deltaDelay={idx * deltaDelay}
      onRemove={removeToast.bind(null, id)}
      {level}
      >{content}
    </Toast>
  {/each}
</section>

<style>
  .Toaster {
    z-index: 99;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    padding: 1rem 1.5rem;
  }
</style>
