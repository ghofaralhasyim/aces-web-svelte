<script lang="ts">
	import type { PageData } from './$types';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	import 'swiper/swiper.min.css';
	import Accordion from '$lib/components/Accordion.svelte';

	import dummyImage1 from '$lib/images/story-2.jpg';
	import dummyImage2 from '$lib/images/dummy-image-2.jpg';
	import dummyImage3 from '$lib/images/ACESDAY-2022-21.jpg';
	import dummyImage4 from '$lib/images/DNF_0334.jpg';

	export let data: PageData;
	let announcement = [
		{
			image_url: 'images/undraw_online_wishes_dlmr.png',
			title: 'Happy Graduation',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, laboriosam.'
		},
		{
			image_url: 'images/undraw_online_wishes_dlmr.png',
			title: 'Happy Graduation',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, laboriosam.'
		},
		{
			image_url: 'images/undraw_online_wishes_dlmr.png',
			title: 'Happy Graduation',
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, laboriosam.'
		}
	];
	const galery = [
		{
			image_url: dummyImage1
		},
		{
			image_url: dummyImage2
		},
		{
			image_url: dummyImage3
		},
		{
			image_url: dummyImage4
		}
	];
	const faqs = [
		{
			question: 'Bagaimanakah cara mendaftar menjadi pengurus ACES?',
			answer:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores accusamus voluptatum voluptatem molestiae natus a sint animi fugit placeat.'
		},
		{
			question: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit?',
			answer:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores accusamus voluptatum voluptatem molestiae natus a sint animi fugit placeat.'
		}
	];
</script>

<svelte:head>
	<title>Homes</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="site-main">
	<section class="hero-section">
		<div class="container flex flex-col relative">
			<div class="full-width flex flex-col md-flex-row ">
				<div class=" fg-1 hero-left">
					<h1 class="title text-dark">A<span class="text-primary">CE</span>S</h1>
					<p class="description">
						/'ay·suhz/ - Association of Computer Engineering Students. In short: here is the place
						you can enjoy your education.
					</p>

					<div class="mt-32">
						<a href="/" class="btn-dark">Sampaikan Aspirasimu</a>
					</div>
				</div>
				<div class="hero-right fg-1">
					<img src="images/mail-box-3d-shadow.png" alt="" />
				</div>
			</div>
			<div class="message">
				{#each announcement as item}
					<div class="item flex flex-row col-gap-12">
						<div class="image">
							<img src="images/dummy-image-2.jpg" alt="" />
						</div>
						<div class="flex flex-col">
							{#if item.title}
								<span class="f-16 f-bold"> {item.title} </span>
							{/if}
							<p class="m-0 text-small mt-8">
								{item.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
	<section class="pilars pb-64">
		<div class="pt-32 pb-32 container quote">
			<span>OUR WORK</span>
			<p>
				Kami membantu mahasiswa teknik komputer UMN selama masa perkuliahan, mempersiapkan diri
				untuk terjun di dunia kerja, serta berkarya untuk almamater, persada, dan sesama.
			</p>
		</div>
		<div class="grid galery">
			<div class="grid_column galery-item" data-col="s12,m6,l4">
				<img src={galery[0].image_url} alt="" />
			</div>
			<div class="grid_column flex flex-col row-gap-12 galery-item" data-col="s12,m6,l8">
				<div class="fg-1 flex flex-row col-gap-12">
					<div class="fg-1">
						<img src={galery[3].image_url} alt="" />
					</div>
					<div class="fg-1">
						<img src={galery[2].image_url} alt="" />
					</div>
				</div>
				<div class="fg-1 full-width">
					<img src={galery[1].image_url} alt="" />
				</div>
			</div>
		</div>
	</section>

	<section class="labs full-width pt-64 pb-64 relative">
		<div class="grid container">
			<div class="grid_column" data-col="s12,l5">
				<span class="f-32">Mendorong Mahasiswa Untuk Berinovasi</span>
				<p>
					Kami membantu mahasiswa dalam mengembangkan keterampilan dan kemampuan yang diminati.
					Apresiasi juga kami berikan berupa publikasi karya dan pemberian poin SKKM.
				</p>
				<a href="/labs" class="btn">Lihat Karya Lainnya</a>
			</div>
			<div class="grid_column project" data-col="s12,l7">
				<div class="full-width">
					<Swiper
						spaceBetween={10}
						slidesPerView={1}
						breakpoints={{
							760: {
								slidesPerView: 2
							}
						}}
					>
						{#each data.dataLabs.data as labs}
							<SwiperSlide>
								<div class="item">
									<div class="image">
										<img src={labs.image} alt="" />
									</div>
									<h5>{labs.title}</h5>
									<p>{@html labs.excerpt}</p>
								</div>
							</SwiperSlide>
						{/each}
					</Swiper>
				</div>
			</div>
		</div>
	</section>

	<section class="random-quote">
		<div class="container pt-32 pb-32">
			<span>Random information</span>
			<h3 class="mb-0">
				Tahookah kamu, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis,
				doloribus!
			</h3>
			<p class="mt-12">ACES Gen. 12</p>
		</div>
	</section>

	<section class="faq-section pt-32 pb-64">
		<div class="container flex flex-col v-center">
			<h2>Frequenly Asked Question</h2>
			{#each faqs as faq}
				<Accordion data={faq} />
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	.faq-section {
		min-height: 60vh;
		background-color: $white;
	}

	.site-main {
		background: #f9f9f9;
		overflow: hidden;

		.container {
			max-width: 1121px;
		}
	}

	.hero-section {
		width: 100%;
		max-width: 100%;
		height: calc(100vh - 70px);
		padding: 0;
		overflow: hidden;

		@media #{$large} {
			padding: 32px 10% 0 10%;
		}

		@media #{xl} {
			padding: 32px 10% 0 10%;
		}

		.title {
			font-size: 46px;
			max-width: 20%;
			margin-bottom: 0;
			margin-top: 32px;
			font-family: 'LibreBaskerville-Bold', serif;
			@media #{$md} {
				font-size: 72px;
			}
		}
		.description {
			@media #{$md} {
				max-width: 560px;
			}
		}
		.hero-left {
			@media #{$md} {
				margin-top: 5%;
			}
		}
		.hero-right {
			img {
				width: 400px;
				aspect-ratio: 1/1;
				margin-left: 20%;
				@media #{$md} {
					width: 600px;
					margin-left: 20%;
				}

				@media #{$large} {
					width: 700px;
					margin-left: 20%;
				}
			}
		}

		.btn-dark {
			border-radius: 4px;
		}

		.message {
			position: absolute;
			z-index: 2;
			bottom: 6em;

			@media #{$md} {
				display: flex;
				bottom: 7em;
			}

			@media #{$large} {
				bottom: 14em;
			}

			.item {
				overflow: hidden;
				background-color: rgba($white, 0.8);
				box-shadow: 0px 8px 16px 5px rgba(159, 159, 159, 0.13);
				border-radius: 8px;
				padding: 12px;
				margin-right: 12px;
				margin-top: 12px;
				width: 100%;

				@media #{$md} {
					background-color: $white;
				}
			}

			img {
				width: 60px;
				height: 60px;
				object-fit: contain;
				border-radius: 9999px;
			}
		}
	}

	.pilars {
		background-color: $white;
		.quote {
			padding: 32px 0;
			span {
				letter-spacing: 2px;
			}
			p {
				font-size: 2em;
			}
		}
	}

	.galery {
		padding: 0 1.5em;
		height: 700px;
		@media #{$md} {
			height: 500px;
		}
		@media #{$large} {
			height: 700px;
		}

		&-item:first-child {
			@media #{$md} {
				padding-right: 12px;
			}
		}

		&-item:nth-child(2) {
			padding-top: 12px;
			@media #{$md} {
				padding-top: 0;
			}
			div:first-child {
				@media #{$large} {
					max-height: 300px;
				}
			}
		}

		&-item {
			background-color: $white;
			max-height: 700px;
			overflow: hidden;
			@media #{$md} {
				height: 500px;
			}
			@media #{$large} {
				height: 700px;
			}
			img {
				object-fit: cover;
				object-position: center center;
				height: 100%;
				width: 100%;
			}
		}
	}

	.labs {
		.project {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}
		.item {
			background-color: $white;
			border-radius: 8px;
			padding: 12px;
			max-width: 360px;
			box-shadow: 0px 8px 16px 5px rgba(159, 159, 159, 0.13);

			.image {
				max-height: 200px;
				overflow: hidden;
				border-radius: 4px;
			}
			img {
				width: 100%;
				object-fit: cover;
			}
			h5 {
				margin: 12px 0 0 0;
			}
			p {
				margin: 8px 0;
				font-size: small;
			}
		}
	}

	.random-quote {
		background-color: $dark;
		color: $white;
	}

	.btn {
		color: $white;
		border-radius: 4px;
		background-color: $dark;
	}
</style>
