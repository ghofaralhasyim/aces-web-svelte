<script lang="ts">
	import Api from '$lib/plugins/api';
	import type { PageData } from './$types';
	import FilterDropdown from '$lib/components/FilterDropdown.svelte';
	import bgBanner from '$lib/images/bg-banner-3.jpg';
	import LabsCard from '$lib/components/LabsCard.svelte';
	import adsImage from '$lib/images/banner-labs-1.jpg';

	export let data: PageData;

	let keyword: string = '';
	let category: string = '';

	async function filterPosts() {
		try {
			const dataPost = await Api.get(`/labs?search=${keyword}&labscategory=${category}`);
			data.dataLabs = dataPost;
		} catch (error) {
			console.log(error);
		}
	}

	function changeCategory(event: any) {
		category = event.detail.data.slug;
		filterPosts();
	}
</script>

<main class="site-main">
	<section class="labs">
		<section class="labs-header flex flex-col h-center" style="background-image: url({bgBanner})">
			<div class="container content flex flex-col md-flex-row col-gap-12">
				<div class="search-bar full-width">
					<i class="i-search text-grey" />
					<input
						bind:value={keyword}
						on:keydown={(e) => {
							if (e.key === 'Enter') filterPosts();
						}}
						type="text"
						class="search-input full-width form-input"
						placeholder="Search project..."
					/>
					<div class="filter flex flex-row v-center h-center col-gap-12 pr-12">
						<span>IN</span>
						<FilterDropdown data={data.dataCategory} on:clicked={changeCategory} />
					</div>
				</div>
			</div>
		</section>
	</section>
	<section class="article mt-32">
		<div class="container flex flex-row flex--wrap col-gap-12 row-gap-32">
			{#each data.dataLabs.data as lab}
				<LabsCard data={lab} />
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	.site-main {
		min-height: calc(100vh - 70px);
		padding: 0 0 64px 0;
	}
	.labs {
		color: #222;

		&-header {
			text-align: center;
			font-weight: 400;
			position: relative;
			margin: 0 0 1em 0;
			min-height: 100px;
			color: #fff;
			background-size: cover;
			.search-input {
				border-radius: 12px;
			}

			.content {
				align-items: center;
				row-gap: 12px;
			}
		}
	}

	.search-bar {
		position: relative;

		input {
			z-index: -1;
			padding-left: 3.5em;
			height: 50px;
		}
		i {
			position: absolute;
			top: 30%;
			left: 1em;
			z-index: 1;
		}

		.filter {
			position: absolute;
			top: 30%;
			right: 1em;
			z-index: 2;

			color: #000;
			font-size: 12px;

			display: none;

			@media #{$md} {
				display: flex;
				width: 40%;
			}
			@media #{$large} {
				width: 30%;
			}
		}
	}

	.article {
		.container {
			@media #{$md} {
				justify-content: space-between;
			}
			@media #{$xl} {
				justify-content: flex-start;
			}
		}
	}
</style>
