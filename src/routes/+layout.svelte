<script>
	import "../assets/styles/index.css";
	import Toaster from "../components/Toaster.svelte";
</script>

<div class="app">
	<main>
		<slot />
		<Toaster />
	</main>
</div>

<style>
</style>
