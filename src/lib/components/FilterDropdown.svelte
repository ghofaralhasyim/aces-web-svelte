<script lang="ts">
	import { clickOutside } from '$lib/plugins/clickOutside';
	import { createEventDispatcher } from 'svelte';

	export let data: any = [];
	let active = false;
	let dataActive: String = 'All Category';
	const dispatch = createEventDispatcher();

	function dropDownToggler() {
		active = !active;
	}

	function changeDataActive(item: any) {
		dispatch('clicked', { data: item });
		dataActive = item.name;
		active = false;
	}
</script>

<div class="dropdown">
	<button class="form-input flex full-width cursor-pointer">
		<div
			class="flex f-space-between full-width"
			on:click={dropDownToggler}
			on:keydown={dropDownToggler}
		>
			<span class="placeholder">{dataActive}</span>
			<i class="i-angle-right" />
		</div>
		{#if active}
			<div class="dropdown-list" use:clickOutside={() => (active = false)}>
				<ul>
					{#each data as item}
						<li
							class="cursor-pointer"
							on:click={() => changeDataActive(item)}
							on:keydown={() => changeDataActive(item)}
						>
							{item.name}
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</button>
</div>

<style lang="scss">
	.dropdown {
		position: relative;
		width: 100%;

		.placeholder {
			margin-right: 6px;
		}

		span {
			min-width: 100px;
		}

		button {
			border-radius: 0;
			display: flex;
			align-items: center;
			background: transparent;
			border: 0;
			margin: 0;
			padding: 0;
			font-size: 12px;

			@media #{$large} {
				min-width: 150px;
			}
		}

		&-list {
			position: absolute;
			bottom: 38px;
			min-width: 100%;
			z-index: 10;
			background: transparent;
			left: 0;
			top: 20px;

			ul {
				border-radius: 4px;
				list-style: none;
				padding-left: 0;
				background: white;
				box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
				max-height: 160px;
				overflow-y: auto;

				li {
					padding: 12px 12px;
					background: white;
					&:hover {
						background: #ffece7;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
