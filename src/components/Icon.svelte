<script lang="ts">
  import facebook from "../assets/images/socials/facebook.svg";
  import google from "../assets/images/socials/google.svg";
  import linkedin from "../assets/images/socials/linkedin.svg";

  const icons = {
    facebook,
    google,
    linkedin,
  };

  export let name: keyof typeof icons;
</script>

{#if name && name in icons}
  <img src={icons[name]} alt={name} class={`Icon Icon-${name}`} />
{/if}

<style>
  .Icon {
    width: 30px;
    height: 30px;
  }
</style>
