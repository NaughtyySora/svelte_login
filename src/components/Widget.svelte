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
		// {
		// 	title: "Hello, Friend!",
		// 	description: "Enter your personal details and start journey with us",
		// 	button: "Sign up",
		// },
	];
</script>

<div class="Widget">
	<SignInForm />
	<SignUpForm />

	<div class="Widget-overlay">
		<div class="Widget-overlay-container">
			{#each overlayContent as { button, description, title } (title)}
				<div class="Widget-overlay-panel">
					<h3 class="Widget-overlay-title">{title}</h3>
					<p class="Widget-overlay-text">{description}</p>
					<button class="Widget-overlay-btn">{button}</button>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.Widget {
		position: relative;
		border-radius: 1rem;
		display: flex;
		align-items: center;
		background-color: #fff;
		box-shadow:
			0 14px 28px rgba(0, 0, 0, 0.25),
			0 10px 10px rgba(0, 0, 0, 0.22);
		overflow: hidden;
		min-width: 768px;
		max-width: 1000px;
		min-height: 550px;
	}

	.Widget-overlay {
		position: absolute;
		inset: 0;
	}

	.Widget-overlay-container {
		position: absolute;
		width: 50%;
		top: 0;
		bottom: 0;
		right: 0;
		background: var(--red);
		background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
		background: linear-gradient(to right, #ff4b2b, #ff416c);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 0;
		color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.Widget-overlay-panel {
		max-width: 75%;
		width: 100%;
		margin: 0 auto;
	}

	.Widget-overlay-title {
		font-size: var(--fSize32);
		font-family: 800;
		color: var(--white);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.Widget-overlay-text {
		font-size: var(--fSize16);
		color: var(--white);
		margin-bottom: 1.5rem;
		text-align: center;
		line-height: 1.5;
	}

	.Widget-overlay-btn {
    background-color: transparent;
    padding: 0.825rem 1.25rem;
    font-size: var(--fSize14);
    color: var(--white);
    border-radius: 2rem;
    min-width: 150px;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    margin: 1.5rem auto 0 auto;
		border: 1px solid var(--white);
	}
</style>
