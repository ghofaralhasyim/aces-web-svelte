<script lang="ts">
	export let active: boolean = false;
</script>

{#if active}
	<div class="popup flex flex-col v-center h-center">
		<div class="overlay" />
		<div class="popup-content">
			<div class="popup-header">
				<slot name="popup-header" />
			</div>
			<div class="popup-body">
				<slot name="popup-body" />
			</div>
			<div class="popup-footer">
				<slot name="popup-footer" />
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.popup {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 5;
	}

	.overlay {
		position: absolute;
		min-width: 100%;
		min-height: 100%;
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(5.4px);
		background-color: rgba($color: #000000, $alpha: 0.6);
	}

	.popup-content {
		position: relative;
		z-index: 1;
		background-color: $white;
		width: 100%;
		max-width: 420px;
		border-radius: 4px;
	}

	.popup-header {
		padding: 1em 1em;
		border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
	}
	.popup-body {
		padding: 1em 1em;
	}
	.popup-footer {
		padding: 1em 1em;
		border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
	}
</style>
