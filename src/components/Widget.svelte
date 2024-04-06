<script>
	import SignInForm from "./SignInForm.svelte";
	import SignUpForm from "./SignUpForm.svelte";

	const overlayContent = [
		{
			title: "Welcome Back!",
			description:
				"To keep connected with us please login with your personal info",
			button: "Sign In",
		},
		{
			title: "Hello, Friend!",
			description: "Enter your personal details and start journey with us",
			button: "Sign up",
		},
	];
	
</script>

<div class="Widget">
	<SignUpForm />
	<SignInForm />

	<div class="Widget-overlay">
		{#each overlayContent as { button, description, title } (title)}
			<div class="Widget-overlay-panel">
				<h1>{title}</h1>
				<p>{description}</p>
				<button class="Widget-overaly">{button}</button>
			</div>
		{/each}
	</div>
</div>
