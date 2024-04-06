<script lang="ts">
  import Form from "./Form.svelte";
</script>

<Form title="Sign in" buttonTitle="Sign In" class="SignIn">
  <p class="SignIn-text">or use your account</p>
  <input class="SignIn-email" type="email" placeholder="Email" />
  <input class="SignIn-password" type="password" placeholder="Password" />
  <a href="/forgot-password" class="SignIn-forgot">Forgot your password?</a>
</Form>

<style>
  .SignIn-text {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: var(--fSize14);
  }
  .SignIn-email,
  .SignIn-password {
    background-color: var(--white_20);
    border: none;
    padding: 0.825rem 1rem;
    margin: 0.5rem 0;
    width: 100%;
  }

  .SignIn-password {
    margin-bottom: 1.5rem;
  }

  .SignIn-forgot {
    display: block;
    text-align: center;
  }
</style>
