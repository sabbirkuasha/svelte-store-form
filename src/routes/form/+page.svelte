<script>
	import Table from '../../lib/common/Table.svelte';

	import { enhance } from '$app/forms';

	import toast, { Toaster } from 'svelte-french-toast';

	export let data;
	export let form = null;

	$: !form?.error ? toast.success('It works!') : '';
	$: form?.error ? toast.error('fill your form again') : '';

	let { contacts } = data;
	$: contacts;
	console.log(form);
</script>

<Toaster />
<h1 class="prose prose-slate p-5">Form</h1>

<form method="POST" action="?/createForm">
	<div class="flex flex-col flex-wrap gap-5 pl-5 w-1/2">
		<input
			type="text"
			name="name"
			placeholder="Type name here"
			class="input w-full  input-primary"
			value={form?.name ?? ''}
		/>
		<input
			type="text"
			name="email"
			placeholder="Type email here"
			class="input w-full  input-primary"
			value={form?.email ?? ''}
		/>
		<input
			type="text"
			name="company"
			placeholder="Type company here"
			class="input w-full  input-primary"
			value={form?.company ?? ''}
		/>
		<input
			type="text"
			name="address"
			placeholder="Type address here"
			class="input w-full  input-primary"
			value={form?.address ?? ''}
		/>

		<button class="btn btn-primary">Place Order</button>
	</div>
</form>
<div
	class="w-4/5 p-5
"
>
	<Table {contacts} />
</div>
