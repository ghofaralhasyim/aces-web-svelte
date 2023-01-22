<script lang="ts">
	import logo from '$lib/images/aces-logo.png';
</script>

<footer>
	<div class="container">
		<div class="grid container">
			<div class="brand grid_column flex flex-col  v-start" data-col="s12,m4">
				<img src={logo} class="site-logo" alt="" />
				<div class="flex flex-col">
					<span>ACES</span>
					<span>Association of Computer Engineering Students</span>
				</div>
			</div>
			<div class="grid_column contacts" data-col="s12,m3">
				<h5>Contacts</h5>
				<li>Email: aces.umn.ac.id</li>
				<li>Instagram: @acesumn</li>
				<li>Website: aces.umn.ac.id</li>
			</div>
			<div class="grid_column quote" data-col="s12,m5">
				<p class="m-0 f-32">We are not just part of a system, <br /> we create it!</p>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: $dark;
		color: $white;
		padding: 64px 0;
	}

	.contacts {
		order: 1;
		@media #{$large} {
			order: 0;
		}
	}

	.grid_column {
		margin-bottom: 2em;
	}

	h5 {
		margin: 0 0 1em 0;
	}

	li {
		list-style: none;
		margin-bottom: 12px;
	}

	.brand {
		font-family: 'LibreBaskerville', serif;
		flex-direction: row;

		@media #{$md} {
			flex-direction: column;
		}

		img {
			margin-left: -12px;
			max-width: 120px;
			object-fit: contain;
		}

		span:first-child {
			letter-spacing: 16px;
			padding: 4px 0;
		}
		span:nth-child(2) {
			font-size: 10px;
		}
	}
</style>
