<a href="#" class="article-card flex flex-col shadow full-width text-black">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img src="images/default-image.jpg" alt="article-image" />
	<span class="category">Lorem, ipsum.</span>
	<div class="flex flex-col p-16">
		<h6 class="title text-black m-0">Lorem ipsum dolor sit amet consectetur.</h6>
		<p class="text-small preview-content">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus?
		</p>
	</div>
</a>

<style lang="scss">
	.article-card {
		position: relative;
		background: white;

		box-shadow: 0px 8px 16px 5px rgba(159, 159, 159, 0.13);
		min-height: 300px;
		max-height: 300px;
		border-radius: 8px;

		overflow: hidden;

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
			max-height: 160px;
			min-height: 160px;
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
		max-height: 3.4em;
		line-height: 1.6em;
	}
</style>
