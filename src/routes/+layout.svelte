<script>
	import '../app.postcss';

	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { redirectPage } from './store';

	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';

	onMount(async () => {
		console.log('Hello world');
		console.log($redirectPage);
	});

	let prevRoute = null;
	$: prevRoute;

	beforeNavigate(async () => {
		console.log('before navigate function here');
		console.log($page);
		prevRoute = $page.url.href;
		redirectPage.set($page.url.href);
	});

	$: {
		console.log('reactive page variable');
		console.log($page);
	}

	afterNavigate(async () => {
		console.log('after navigate function here');
		console.log($page);
	});

	function goBack() {
		console.log('previous page clicked');
		history.go(-2);
	}

	function redirectRoute() {
		console.log('this is redirect Route fucntion');
	}
</script>

<nav class="flex flex-row gap-5 p-2">
	<a class="btn btn-circle" href="/phone">Phone</a>
	<a class="btn btn-circle" href="/checkout">checkout</a>
	<a class="btn btn-circle" href="/form">form</a>
	<a class="btn btn-circle" href="/navbar">navbar</a>
	<a class="btn btn-circle" href="/women">Women</a>
	<a class="btn btn-circle" href="/women/sub">Women-Sub</a>
</nav>

<div class="ring">
	<h1>Previous route was:</h1>
	<span class="text-3xl">{prevRoute}</span>
</div>

<div class="mt-5">
	<button on:click={goBack} class="btn btn-secondary">Back</button>
</div>
<slot />
