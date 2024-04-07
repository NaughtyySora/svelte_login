<script lang="ts">
  import { bulkValidateForm } from "$lib/validators";
  // import { authApi } from "../api/auth/api";
  import { addToast } from "../stores/toast-store";
  import Form from "./Form.svelte";

  const options = [{ key: "email" }, { key: "password" }, { key: "name" }];

  const onSubmit = (e: Event & { currentTarget: HTMLFormElement }) => {
    const data = new FormData(e.currentTarget);
    const isValid = bulkValidateForm({ data, options });

    if (!isValid) {
      addToast("error", { content: "Fields are not valid" });
      return;
    }

    // authApi
    //   .singUp(data)
    //   .then(() => {
    //     addToast("success", { content: "Sing Up Success!" });
    //   })
    //   .catch(() => {
    //     addToast("error", { content: "Sing Up Error" });
    //   });
  };
</script>

<Form
  {...$$restProps}
  title="Create Account"
  buttonTitle="Sign Up"
  class={`SignUp ${$$props.class}`}
  {onSubmit}
>
  <p class="SignUp-text">or use your email for registration</p>
  <input type="text" placeholder="Name" class="SignUp-name" name="name" />
  <input type="email" placeholder="Email" class="SignUp-email" name="email" />
  <input
    type="password"
    placeholder="Password"
    class="SignUp-password"
    name="password"
  />
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
