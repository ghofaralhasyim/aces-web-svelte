<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Helpers from '$lib/plugins/helpers';

	export let data: PageData;

	let asideOpen: boolean = false;
	let innerWidth: number;
	let tableOfContent: any[] = [];

	onMount(() => {
		const content: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
			'content-wrapper'
		) as HTMLCollectionOf<HTMLElement>;
		const heading = content[0].querySelectorAll('h1,h2,h3,h4,h5');
		Array.from(heading, (node) => {
			tableOfContent = [...tableOfContent, node];
		});
	});

	function scrollToHeading(scrollTop: number) {
		window.scrollTo({ top: scrollTop - 50 });
		if (innerWidth <= 1024) asideToggler();
	}

	function asideToggler() {
		if (!asideOpen) {
			const body = Array.from(
				document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>
			);
			body[0].style.overflow = 'hidden';
			asideOpen = true;
		} else {
			const body = Array.from(
				document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>
			);
			body[0].style.overflow = 'auto';
			asideOpen = false;
		}
	}

	function onWindowResized() {
		if (innerWidth >= 1024) {
			const body = Array.from(
				document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>
			);
			body[0].style.overflow = 'auto';
		}
	}
</script>

<svelte:window bind:innerWidth on:resize={onWindowResized} />

<main class="site-main">
	<div class="overlay" class:d-none={!asideOpen} />
	<aside class="aside-left" class:aside-active={asideOpen}>
		<h5>Table of Content</h5>
		{#each tableOfContent as heading}
			<li
				on:click={() => scrollToHeading(heading.offsetTop)}
				on:keydown={() => scrollToHeading(heading.offsetTop)}
			>
				{heading.innerText}
			</li>
		{/each}
	</aside>
	<div
		class="table-of-content-toggler flex v-center h-center"
		on:click={asideToggler}
		on:keydown={asideToggler}
	>
		<i class="i-bars" />
	</div>
	<div class="container relative">
		<div class="grid">
			<div class="grid_column flex flex-row" data-col="s12,m12,l9">
				<div class="content-wrapper">
					<div class="flex flex-col">
						<p class="date">{Helpers.formatFullDate(data.dataArticle.created_at)}</p>
						<span class="mr-8 category bg-blue">{data.dataArticle.labscategory.name}</span>
					</div>
					<h1 class="title mb-18">{data.dataArticle.title}</h1>
					<span class="author">Author - {data.dataArticle.author.name}</span><br />
					<img src={data.dataArticle.image} alt="" />
					<div class="content">
						{@html data.dataArticle.body}
					</div>
				</div>
			</div>
			<div class="grid_column" data-col="s12,m12,l3">
				<aside class="aside-right">
					<div class="title">Related Articles</div>
					<div class="flex flex-col">
						{#each data.relatedArticle.data as relatedArticle}
							<a href="/labs/{relatedArticle.slug}" class="text-dark related-article-card">
								<h6 class="title">
									{relatedArticle.title}
								</h6>
								<p class="content">
									{relatedArticle.excerpt}
								</p>
							</a>
						{/each}
					</div>
				</aside>
			</div>
		</div>
	</div>
	<Footer />
</main>

<style lang="scss">
	.site-main {
		background-color: $white !important;
		@media #{$large} {
			padding-left: 230px;
		}
	}

	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 5;
		background-color: rgba($color: #000000, $alpha: 0.3);

		@media #{$large} {
			display: none;
		}
	}

	.table-of-content-toggler {
		position: fixed;
		right: 0;
		top: 100px;
		width: 46px;
		height: 46px;
		background-color: $yellow;
		z-index: 10;
		border-radius: 8px 0 0 8px;

		@media #{$md} {
			top: 110px;
		}

		@media #{$large} {
			display: none;
		}
	}

	.content-wrapper {
		padding: 12px 0 64px 0;

		@media #{$md} {
			padding: 12px 32px 64px 32px;
		}

		@media #{$large} {
			padding: 32px 64px 64px 0;
		}

		.date {
			color: rgba($color: #000000, $alpha: 0.6);
		}

		.author {
			color: rgba($color: #000000, $alpha: 0.6);
		}

		.category {
			font-size: 12px;
			padding: 4px 12px;
			border-radius: 10px;
			height: fit-content;
			width: fit-content;
		}

		img {
			width: 100%;
			max-width: 100%;
			margin-top: 16px;

			@media #{$large} {
				margin-top: 64px;
				margin-bottom: 64px;
			}
		}

		.title {
			margin-top: 16px;
			margin-bottom: 1.6em;

			@media #{$large} {
				margin-top: 1em;
			}
		}
	}

	.aside {
		&-left {
			position: fixed;
			right: -100%;
			top: 0;
			padding: 98px 1.5em 0 1.5em;
			width: 100%;
			max-width: 260px;
			min-height: 100vh;
			border-right: 1px solid rgba($color: #000000, $alpha: 0.1);
			background-color: $white;
			overflow-y: auto;
			z-index: 6;
			transition: all 0.5s ease-in-out;

			li {
				list-style: none;
				margin-bottom: 12px;
				font-size: 12px;
				cursor: pointer;
			}

			@media #{$large} {
				display: block;
				left: 0;
				right: auto;
				max-width: 230px;
			}
		}
		&-right {
			border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
			min-height: 100%;
			padding: 32px 0 64px 0;

			@media #{$md} {
				padding: 64px 32px;
			}

			@media #{$large} {
				border-left: 1px solid rgba($color: #000000, $alpha: 0.1);
				padding: 64px 32px 0 32px;
			}

			.title {
				margin-bottom: 32px;
			}
		}
	}

	.related-article-card {
		margin-bottom: 2em;
		.title {
			margin: 0;
			font-size: 1em;
			display: -webkit-box;
			max-width: 100%;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.content {
			margin: 12px 0 0 0;
			font-size: 12px;
			display: -webkit-box;
			max-width: 100%;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}

	.aside-active {
		right: 0;
	}
</style>
