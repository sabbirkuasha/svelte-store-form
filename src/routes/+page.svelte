<script>
	import { isActive } from './store';

	function handleClick() {
		isActive.update((value) => !value);
		console.log($isActive);
	}

	import { user } from './storeInfo';
	function updateUserEmail(newEmail) {
		user.update((e) => ({ ...e, email: newEmail }));
		console.log($user.email);
	}

	function handleSubmit() {
		console.log(phoneNumber);
	}

	let phoneNumber = '';

	function handleFocus() {
		if (!phoneNumber) {
			phoneNumber = '+880';
		}
	}
	export let data;
	console.log(data);
</script>

<main>
	<div class="w-full h-52 ">
		<form on:submit|preventDefault={handleSubmit}>
			<span>+880</span>
			<input
				class="input input-primary"
				type="number"
				pattern="^\+880[0-9]{10}$"
				placeholder="+880XXXXXXXXXX"
				on:focus={handleFocus}
				bind:value={phoneNumber}
			/>
			<button class="btn btn-primary" type="submit">Submit</button>
		</form>
	</div>
	{JSON.stringify($user)}
	<!-- <button class="btn btn-primary" on:click={handleClick}>
		{#if $isActive}
			Turn on
		{:else}
			Turn Off
		{/if}
	</button> -->
	<br />

	<h1>{$user.email}</h1>

	<hr />
	<h1>Update user email only</h1>
	<button class="btn btn-primary" on:click={() => updateUserEmail('sabbir@gmail.com')}
		>Update user email
	</button>
</main>
