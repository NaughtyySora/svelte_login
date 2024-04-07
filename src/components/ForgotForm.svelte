<script lang="ts">
  import { validators } from "$lib/validators";
  // import { authApi } from "../api/auth/api";
  import { addToast } from "../stores/toast-store";

  let sended = false;

  const onSubmit = (e: Event & { currentTarget: HTMLFormElement }) => {
    const data = new FormData(e.currentTarget);

    if (!validators.email(data.get("email") as string)) {
      addToast("error", { content: "Invalid Email" });
      return;
    }
    
    // authApi.forgot(data)
    // .then(() => {
    //   addToast("success", { content: "Request sent !" })
    //   sended = true;
    // })
    // .catch(() => void addToast("error", { content: "Error while send request" }));
  };

</script>

<div class="ForgotForm">
  {#if !sended}
    <h1 class="ForgotForm-title">Enter Your Email</h1>
    <form class="ForgotForm-form" on:submit|preventDefault={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        id="email"
        class="ForgotForm-email"
        autocomplete="email"
      />

      <button class="ForgotForm-submit">Submit</button>
    </form>
  {:else}
    <div>
      <h1 class="ForgotForm-title">Check your email</h1>
      <span class="ForgotForm-letter" />
    </div>
  {/if}
</div>

<style>
  .ForgotForm {
    border-radius: 1rem;
    background-color: var(--white);
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    overflow: hidden;
    min-width: 450px;
    padding: 2.5rem;
    min-height: 300px;
  }

  .ForgotForm-title {
    flex-basis: 100%;
    margin-bottom: 2.5rem;
    font-size: var(--fSize32);
    font-weight: 400;
    text-align: center;
  }

  .ForgotForm-email {
    background-color: var(--white_20);
    border: none;
    padding: 0.825rem 1rem;
    margin: 0.5rem 0;
    width: 100%;
  }

  .ForgotForm-submit {
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

  .ForgotForm-letter::before {
    content: "\2709";
    font-size: var(--fSize64);
    line-height: 1;
    color: var(--blue);
    text-align: center;
    display: block;
  }
</style>
