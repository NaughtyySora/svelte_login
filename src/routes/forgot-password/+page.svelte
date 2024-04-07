<script>
  import ForgotForm from "../../components/ForgotForm.svelte";
</script>

<svelte:head>
  <title>Forgot Password</title>
  <meta name="description" content="Forgot password page" />
</svelte:head>

<section class="Forgot">
  <a href="/" class="Forgot-back">Back</a>
  <ForgotForm />
</section>

<style>


  .Forgot-back {
    display: block;
    margin-bottom: 2rem;
    font-size: var(--fSize16);
  }

  .Forgot-back::before {
    content: "\2190";
    margin-right: 0.5rem;
    font-size: var(--fSize20);
  }

</style>
