<script lang="ts">
	import type { PageData } from './$types';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';

	import 'swiper/swiper.min.css';
	import ArticleCard from '../components/ArticleCard.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Homes</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="site-main">
	<div class="announcer-container flex v-center h-center">
		<img src="images/bg-banner-3.jpg" class="image-background" alt="" />
		<div class="container flex flex-col lg-flex-row v-center h-center">
			<span>{data.data.announcement_title}</span>
			<a href={data.data.announcement_link} class="btn-primary fit-content"> More Info </a>
		</div>
	</div>
	<section class="hero-section">
		<div class="container flex flex-col relative">
			<div class="mt-64">
				<h1 class="title">ACES</h1>
				<p class="f-24 description">
					/'ay·suhz/ - <span class="text-primary">Association of Computer Engineering Students</span
					>. In short: here is the place you can enjoy your education.
				</p>

				<div class="mt-32">
					<a href="#" class="btn-dark">Submit Your Aspiration</a>
				</div>
			</div>
			<div class="fg-1">
				<div class="relative full-height line-wrapper">
					<div class="line" />
				</div>
			</div>
		</div>
	</section>

	<section class="article full-width pt-64 pb-64">
		<div class="container">
			<Swiper spaceBetween={10} slidesPerView={4}>
				<SwiperSlide><ArticleCard /></SwiperSlide>
				<SwiperSlide><ArticleCard /></SwiperSlide>
				<SwiperSlide><ArticleCard /></SwiperSlide>
				<SwiperSlide><ArticleCard /></SwiperSlide>
			</Swiper>
		</div>
	</section>
</section>

<style lang="scss">
	.site-main {
		background: #d0d0d0;
		background: linear-gradient(
			213deg,
			rgba(208, 208, 208, 1) 0%,
			rgba(241, 241, 241, 1) 30%,
			rgb(252, 252, 252) 100%
		);
		@media #{$md} {
			background: linear-gradient(213deg, #ffffff 0%, #f1f1f1 70%, #f7f7f7 100%);
		}
	}

	.hero {
		&-section {
			width: 100%;
			max-width: 100%;
			min-height: calc(100vh - 150px);
			display: flex;
			color: #4d4e58;

			.title {
				font-size: 72px;
				max-width: 20%;
				margin-bottom: 0;
				font-family: 'LibreBaskerville-Bold', serif;
			}
			.description {
				@media #{$md} {
					max-width: 560px;
				}
			}
		}

		.item {
			position: absolute;
			max-width: 620px;
			background-color: $white;
			border-radius: 8px;
			padding: 1.5em;
			top: 20%;
			right: 2em;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			column-gap: 12px;
			box-shadow: 0px 8px 16px 5px rgba(159, 159, 159, 0.13);
			font-size: 12px;

			h5 {
				margin: 0 0 12px 0;
			}
			.header {
				img {
					border-radius: 9999px;
					width: 60px;
					height: 60px;
					object-fit: cover;
				}
			}

			.item::before {
				content: ' ';
				position: absolute;
				width: 0;
				height: 0;
				left: auto;
				right: 0px;
				bottom: -20px;
				border: 12px solid;
				border-radius: 0 0 8px 0;
				border-color: #ffffff #ffffff transparent transparent;
			}

			.item-1 {
				@extend .item;
				top: 40%;
			}
		}
	}
	.line-wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;

		.image {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			left: -30px;
			width: 60px;
			height: 60px;
			margin-top: 27%;
			background: rgb(150, 41, 19);
			background: radial-gradient(
				circle,
				rgb(178, 185, 202) 0%,
				rgba(241, 241, 241, 1) 51%,
				rgba(241, 241, 241, 0) 100%
			);
			img {
				width: 24px;
				height: 24px;
			}
		}

		.line {
			width: 5px;
			height: 100%;
			background: linear-gradient($dark, #ea6045, #ea6045, $dark);
			position: absolute;
			left: 0;
			z-index: -1;
		}
	}
	.announcer {
		&-container {
			position: relative;

			padding: 1em 0;
			min-height: 80px;
			color: #fff;
			overflow: hidden;

			img {
				position: absolute;
				z-index: 0;

				width: 100%;
				object-fit: cover;
				min-height: 100%;
				left: 0;

				filter: brightness(70%);
			}

			span {
				white-space: nowrap;
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				padding: 5px 12px;

				@media #{$large} {
					width: 80%;
				}
			}

			.btn-primary {
				margin-top: 8px;
				background-color: #fff;
				color: #222;
				font-weight: 300;
			}

			@media #{$large} {
				min-height: 90px;
			}

			.container {
				position: relative;
				z-index: 1;
				text-align: center;

				@media #{$large} {
					text-align: left;
					justify-content: space-between;
					align-items: flex-start;
				}
			}
		}
	}
	.article {
		background: $white;
	}
</style>
