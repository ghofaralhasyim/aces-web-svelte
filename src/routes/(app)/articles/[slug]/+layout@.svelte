<script>
	import '$lib/scss/main.scss';
	import Header from '$lib/components/Header.svelte';
</script>

<div id="app" class="sticky-footer-container">
	<div class="sticky-footer-container-item header-no-shadow">
		<Header />
	</div>
	<main class="sticky-footer-container-item --pushed">
		<slot />
	</main>
</div>

<style lang="scss">
</style>
