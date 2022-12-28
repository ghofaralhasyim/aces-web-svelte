<script>
	import '../lib/scss/main.scss';
	import Header from '../components/Header.svelte';
</script>

<div id="app" class="sticky-footer-container">
	<div class="sticky-footer-container-item">
		<Header />
	</div>
	<main class="sticky-footer-container-item --pushed">
		<slot />
	</main>
	<div class="sticky-footer-container-item">
		<footer />
	</div>
</div>

<style lang="scss">
</style>
