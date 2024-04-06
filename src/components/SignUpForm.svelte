<script lang="ts">
  import Form from "./Form.svelte";
</script>

<Form title="Create Account" buttonTitle="Sign Up" class="SignUp">
  <p class="SignUp-text">or use your email for registration</p>
  <input type="text" placeholder="Name" class="SignUp-name" />
  <input type="email" placeholder="Email" class="SignUp-email" />
  <input type="password" placeholder="Password" class="SignUp-password" />
</Form>

<style>
  .SignUp-text {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: var(--fSize14);
  }

  .SignUp-name,
  .SignUp-email,
  .SignUp-password {
    background-color: var(--white_20);
    border: none;
    padding: 0.825rem 1rem;
    margin: 0.5rem 0;
    width: 100%;
  }
</style>
