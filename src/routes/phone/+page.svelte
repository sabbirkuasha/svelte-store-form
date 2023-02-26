<script>
	import { goto } from '$app/navigation';
	export let data;
	$: console.log(data);

	let phoneNumber = '';

	function handleFocus() {
		if (!phoneNumber) {
			phoneNumber = '+880';
		}
	}

	$: {
		if (phoneNumber.length === '14') console.log('number not matched');
	}
	let ToolTip;

	function handleSubmit() {
		if (isNaN(phoneNumber)) {
			console.log(phoneNumber + ' is not a phone number');
			ToolTip = 'tooltip tooltip-open';
			console.log(ToolTip);
		} else {
			console.log(phoneNumber);
			ToolTip = '';
			goto('/phone/?page=' + phoneNumber);
		}
	}
</script>

<div class="p-20">
	<form on:submit|preventDefault={handleSubmit}>
		<div class=" {ToolTip} tooltip-secondary " data-tip="Mobile number should be +8801719466363">
			<input
				class="input input-primary"
				type="text"
				placeholder="XXXXXXXXXX"
				on:focus={handleFocus}
				bind:value={phoneNumber}
			/>
		</div>
		<br />
		<button class="btn btn-primary mt-5" type="submit">Submit</button>
	</form>
</div>
