<script>
	import '$lib/scss/main.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div id="app" class="sticky-footer-container">
	<div class="sticky-footer-container-item">
		<Header />
	</div>
	<main class="sticky-footer-container-item --pushed">
		<slot />
	</main>
	<div class="sticky-footer-container-item">
		<Footer />
	</div>
</div>

<style lang="scss">
</style>
