<script lang="ts">
	import { form, field } from 'svelte-forms';
	import { required } from 'svelte-forms/validators';
	import FormDropdown from '$lib//components/FormDropdown.svelte';
	import PopupAlert from '$lib/components/PopupAlert.svelte';

	const name = field('name', '', [required()]);
	const email = field('email', '', [required()]);
	const topics: string[] = ['Akademik', 'Non-akademik'];

	let showAlert: boolean = false;

	function submitForm() {
		showAlert = true;
	}
</script>

<PopupAlert active={showAlert}>
	<div slot="popup-header" class="text-center">
		<span>Oh snap!</span>
	</div>
	<div slot="popup-body" class="text-center">
		<p>Mohon maaf layanan sedang tidak tersedia.</p>
	</div>
	<div slot="popup-footer" class="text-center">
		<button on:click={() => (showAlert = false)} class="btn btn-dark border-radius-4 full-width"
			>Close</button
		>
	</div>
</PopupAlert>
<main class="site-main">
	<div class="grid">
		<div class="grid_column info flex flex-col v-center h-center" data-col="l6">
			<div class="container">
				<h3>
					Tahookah kamu, Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolorem?
				</h3>
				<p>ACES Gen. 12</p>
			</div>
		</div>
		<div class="grid_column form flex flex-col" data-col="l6">
			<div class="full-width">
				<h3>Keep our up to date on what you feel.</h3>
			</div>
			<div class="full-width">
				<div class="form-group flex flex-col row-gap-12 mb-12">
					<label for="name">Name:</label>
					<input
						class="form-input"
						bind:value={$name.value}
						type="text"
						name="name"
						id="name"
						autocomplete="off"
					/>
				</div>
				<div class="form-group flex flex-col row-gap-12 mb-12">
					<label for="email">Email:</label>
					<input
						class="form-input"
						bind:value={$email.value}
						type="email"
						name="email"
						id="email"
						autocomplete="off"
					/>
					<span class="f-12">We’ll just use this to follow up if needed. No spam, promise.</span>
				</div>
				<div class="form-group flex flex-col row-gap-12 mb-12">
					<label for="email">Topic:</label>
					<FormDropdown data={topics} placeholder="Select topic" />
				</div>
				<div class="form-group flex flex-col row-gap-12 mb-12">
					<label for="email">Message:</label>
					<textarea class="form-input" rows="5" />
				</div>
				<button type="submit" class="btn btn-dark" on:click={submitForm}>Submit</button>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	.site-main {
		height: calc(100vh - 70px);
	}
	.grid {
		height: 100%;
	}
	.info {
		background: rgb(65, 65, 65);
		background: linear-gradient(51deg, rgba(65, 65, 65, 1) 0%, rgba(35, 32, 32, 1) 100%);
		color: $white;
		padding: 0 1.5em;

		h3 {
			max-width: 80%;
		}
	}

	.form {
		background-color: $white;
		padding: 0 1.5em;

		@media #{$large} {
			margin-top: 64px;
			padding: 0 64px;
		}

		button {
			border-radius: 4px;
		}
	}
</style>
