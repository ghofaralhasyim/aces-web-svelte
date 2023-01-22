<script lang="ts">
	export let data: any;
</script>

<a href="/labs/{data.slug}" class="article-card flex flex-col  text-black">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img src={data.image} alt="article-image" />
	<span class="category">{data.labscategory.name}</span>
	<div class="flex flex-col p-16">
		<h6 class="title text-black m-0">{data.title}</h6>
		<p class="text-small preview-content">
			{data.excerpt}
		</p>
	</div>
</a>

<style lang="scss">
	.article-card {
		position: relative;
		background: white;

		box-shadow: 0px 8px 16px 5px rgba(159, 159, 159, 0.13);
		min-height: 260px;
		max-height: 260px;
		min-width: 300px;
		border-radius: 8px;

		overflow: hidden;

		@media #{$md} {
			width: calc((100% / 2 - (12 * 1px)));
		}

		@media #{$large} {
			width: calc((100% / 4 - (12 * 1px)));
		}

		.category {
			position: absolute;
			top: 10px;
			left: 10px;

			padding: 8px 6px;

			font-weight: 400 !important;
			font-size: 12px;

			background-color: #fff;

			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 200px;
		}

		img {
			object-fit: cover;
			object-position: center center;
			max-height: 180px;
			min-height: 180px;
		}
	}

	a {
		color: $dark !important;
	}

	.title {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
		font-weight: normal;
	}

	.preview-content {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
