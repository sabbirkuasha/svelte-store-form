<script>
	import '../app.postcss';

	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { redirectPage } from './store';

	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';

	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';
	NProgress.configure({ showSpinner: false });

	onMount(async () => {
		console.log('Hello world');
		console.log($redirectPage);
	});

	let prevRoute = null;
	$: prevRoute;

	beforeNavigate(async () => {
		NProgress.start();
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
		NProgress.done();
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

<svelte:head>
	<title>Experiement {$page.data.title ? `| ${page.data.title}` : '| No Name'}</title>
</svelte:head>

<nav class="flex flex-row gap-5 p-2">
	<a class="btn btn-circle" href="/phone">Phone</a>
	<a class="btn btn-circle" href="/checkout">checkout</a>
	<a class="btn btn-circle" href="/form">form</a>
	<a class="btn btn-circle" href="/navbar">navbar</a>
	<a class="btn btn-circle" href="/women">Women</a>
	<a class="btn btn-circle" href="/women/sub">Women-Sub</a>
	<a class="btn btn-circle" href="/lightbox">Lightbox</a>
</nav>

<div class="flex flex-row gap-10 justify-between px-10">
	<div class="mt-5">
		<button on:click={goBack} class="btn btn-secondary">Back</button>
	</div>
	<div class=" flex flex-row items-center gap-5 ">
		<h1>Previous route was:</h1>
		<span class="text-3xl">{prevRoute}</span>
	</div>
</div>

<slot />

<style>
	#nprogress .bar {
		background: rgb(51, 250, 1) !important;

		position: fixed;
		z-index: 1031;
		top: 0;
		left: 0;

		width: 100%;
		height: 2px;
	}
</style>
