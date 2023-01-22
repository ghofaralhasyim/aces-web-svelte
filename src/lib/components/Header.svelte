<script lang="ts">
	import logo from '$lib/images/aces-logo.png';
	let navOpen = false;
	const navToggler = () => {
		navOpen = !navOpen;
	};
</script>

<header id="navbar" class="site-header">
	<div class="flex flex-row f-space-between container">
		<div class="nav-brand">
			<a href="/">
				<img src={logo} class="site-logo" alt="" />
				<span> ACES </span>
			</a>
		</div>

		<div class="nav-toggler">
			<i class="f-18 i-bars" on:click={navToggler} on:keydown={navToggler} />
		</div>

		<div class="nav">
			<ul class="main-nav" class:nav-active={navOpen}>
				<li class="main-nav-item toggler mb-32 mt-32">
					<i class="f-18 i-close" on:click={navToggler} on:keydown={navToggler} />
				</li>
				<li class="main-nav-item">
					<a href="/articles">Article</a>
				</li>
				<li class="main-nav-item">
					<a href="/labs">Labs</a>
				</li>
				<li class="main-nav-item">
					<a href="#about">Contact</a>
				</li>
				<li class="main-nav-item">
					<a href="#about">About us</a>
				</li>
			</ul>
		</div>
	</div>
</header>

<style lang="scss">
	.site-header {
		display: flex;
		position: fixed;
		z-index: 10;

		top: 0;
		left: 0;
		width: 100%;
		height: 70px;

		background-color: #fff;
		box-shadow: 0px 8px 16px 5px rgba(159, 159, 159, 0.13);
		color: #151515;

		flex-direction: row;
		align-items: center;

		@media #{$md} {
			height: 80px;
		}
	}

	.nav-brand {
		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 1.25em;
		font-family: Poppins-medium, sans-serif;

		.site-logo {
			width: 100%;
			max-width: 30px;
			margin-right: 0.5em;
		}

		span {
			letter-spacing: 2px;
			color: #151515;
		}

		@media #{$large} {
			justify-content: flex-start;
			align-items: center;
		}
	}

	.nav-toggler {
		cursor: pointer;
		position: absolute;
		right: 1em;
		@media #{$md} {
			display: none;
		}
	}

	.i-close {
		color: $dark;
		border-radius: 9999px;
		padding: 4px;
	}

	.main-nav {
		position: absolute;
		right: -100%;
		top: 0;
		padding: 0 1em 0 0;
		margin: 0;
		height: 100vh;
		width: 100%;
		background-color: $white;
		z-index: 10;

		display: flex;
		flex-direction: column;
		align-items: flex-end;
		row-gap: 1em;

		.toggler {
			@media #{$md} {
				display: none;
			}
		}

		@media #{$md} {
			position: relative;
			right: 0;
			background-color: transparent;
			height: auto;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 2em;
		}

		@media #{$large} {
			justify-content: flex-end;
		}

		&-item {
			a {
				color: $dark !important;
				font-size: 24px;
				font-weight: 600;
				@media #{$md} {
					font-size: 16px;
					font-weight: 400;
				}
			}
		}
	}

	.nav-active {
		left: 0;

		.toggler {
			transform: rotate(90deg);
			transition: all 0.5s;
		}
	}
</style>
