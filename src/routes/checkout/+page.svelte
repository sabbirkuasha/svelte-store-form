<script>
	export let form;
	console.log(form);

	let shipping_form = 'disabled';

	let billing_shipping_same = false;
	$: billing_shipping_same;
</script>

<form method="POST">
	<div class="flex flex-col gap-2 mx-auto p-5">
		<div id="billing_address" class="ring p-5">
			<div>
				<div class="label-text">Name</div>
				<input
					type="text"
					name="name"
					placeholder="Type your name here"
					class="input input-primary w-full max-w-xs"
				/>
			</div>

			<div>
				<div class="label-text">email</div>
				<input
					type="text"
					name="email"
					placeholder="Type your email here"
					class="input input-primary w-full max-w-xs"
				/>
			</div>
			<div>
				<div class="label-text">phone</div>
				<input
					type="number"
					name="phone"
					placeholder="Type your phone here"
					class="input input-primary w-full max-w-xs"
				/>
			</div>
			<div>
				<div class="label-text">Address</div>
				<input
					type="text"
					name="Address"
					placeholder="Type your Address here"
					class="input input-primary w-full max-w-xs"
				/>
			</div>
		</div>
		{#if !billing_shipping_same}
			<p>shipping and billing are same</p>
		{:else}
			<div id="shipping_address" class="ring p-5 ">
				<div>
					<div class="label-text">Name</div>
					<input
						type="text"
						name="ship_name"
						placeholder="Type your name here"
						class="input input-primary w-full max-w-xs"
					/>
				</div>

				<div>
					<div class="label-text">email</div>
					<input
						type="text"
						name="ship_email"
						placeholder="Type your email here"
						class="input input-primary w-full max-w-xs"
					/>
				</div>
				<div>
					<div class="label-text">phone</div>
					<input
						type="number"
						name="ship_phone"
						placeholder="Type your phone here"
						class="input input-primary w-full max-w-xs"
					/>
				</div>
				<div>
					<div class="label-text">Address</div>
					<input
						type="text"
						name="ship_Address"
						placeholder="Type your Address here"
						class="input input-primary w-full max-w-xs"
					/>
				</div>
			</div>
		{/if}

		<div>
			<label class="cursor-pointer">
				<input
					type="checkbox"
					name="bill_ship"
					bind:checked={billing_shipping_same}
					class="checkbox"
				/>

				<span class="label-text">Billing & Shipping address are Same</span>
			</label>
		</div>
		<div>
			<button class="btn btn-primary">Place Order</button>
		</div>
	</div>
</form>
