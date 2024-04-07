<script lang="ts">
  import { bulkValidateForm } from "$lib/validators";
  // import { authApi } from "../api/auth/api";
  import { addToast } from "../stores/toast-store";
  import Form from "./Form.svelte";

  const options = [{ key: "email" }, { key: "password" }];

  const onSubmit = (e: Event & { currentTarget: HTMLFormElement }) => {
    const data = new FormData(e.currentTarget);
    const isValid = bulkValidateForm({ data, options });

    if (!isValid) {
      addToast("error", { content: "Fields are not valid" });
      return;
    }

    // authApi
    //   .singIn(data)
    //   .then(() => {
    //     addToast("success", { content: "Sign In Success!" });
    //   })
    //   .catch(() => {
    //     addToast("error", { content: "Sign in Error" });
    //   });
  };
</script>

<Form
  {...$$restProps}
  title="Sign in"
  buttonTitle="Sign In"
  class={`SignIn ${$$props.class}`}
  {onSubmit}
>
  <p class="SignIn-text">or use your account</p>
  <input class="SignIn-email" type="email" placeholder="Email" name="email" />
  <input
    class="SignIn-password"
    type="password"
    placeholder="Password"
    name="password"
  />
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
    cursor: pointer;
  }
</style>
