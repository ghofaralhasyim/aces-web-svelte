<script lang="ts">
	import { slide } from 'svelte/transition';
	export let data: any;
	let active: boolean = false;
</script>

<div
	class="accordion"
	class:accordion-active={active}
	on:click={() => (active = !active)}
	on:keyup={() => (active = !active)}
>
	<div class="accordion-header flex flex-row f-space-between v-center">
		<h6>{data.question}</h6>
		<i class="i-angle-right" />
	</div>
	{#if active}
		<div transition:slide class="accordion-content">
			<p>
				{data.answer}
			</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.accordion {
		width: 100%;
		max-width: 700px;
		background-color: $white;
		border-radius: 4px;
		padding: 0 1.5em;

		.accordion-header {
			padding: 1.5em 0;
			cursor: pointer;
			border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
		}

		.accordion-content {
			display: none;

			border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
			color: $darkGrey;
		}

		h6 {
			margin: 0;
			font-weight: 400;
		}
	}

	.accordion-active {
		.accordion-header {
			border-bottom: none;
		}
	}
</style>
