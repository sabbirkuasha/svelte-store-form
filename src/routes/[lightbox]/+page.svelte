<script>
	// import style
	import BiggerPicture from 'bigger-picture/svelte';
	import 'bigger-picture/css';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let allProductImages;
	let productCode;
	let SingleProduct;
	let ReqParam;
	$: ReqParam = $page.params.slug;

	let bp;
	let imageLinks;
	onMount(async () => {
		// Bigger Picture - Initialize
		bp = BiggerPicture({
			target: document.body
		});

		// Bigger Picture - grab image links
		imageLinks = document.querySelectorAll('#tris > a');
		imageLinks.forEach((imageLink) => {
			imageLink.addEventListener('click', openGallery);
		});
	});

	let fullFetch;
	$: fullFetch = async function callFetch() {
		const rsp = await fetch(`https://app.deshal.net/api/getProductDetails/pushpo-kontok`, {
			headers: {
				Accept: 'application/json'
			}
		});

		let response = await rsp.json();
		let SingleProduct2 = response.data;
		console.log(SingleProduct2);
		let allProductImages2 = SingleProduct2?.gallery;
		let productCode2 = SingleProduct2?.code;

		return { allProductImages2, productCode2 };
	};
</script>

{#if fullFetch}
	{fullFetch}
{/if}

<div class="p-5 text-center">
	<h1>Light Box experiment...</h1>
</div>

<div class="flex flex-row flex-wrap gap-5">
	<a class="btn btn-primary" href="/lightbox/surjyo-konya">Op1</a>
	<a class="btn btn-primary" href="/lightbox/keki">Op2</a>
	<a class="btn btn-primary" href="/lightbox/arupa">Op3</a>
</div>

<div id="tris" class="tris ring overflow-hidden w-10">
	{#if SingleProduct}
		<a
			href={SingleProduct.gallery[0].main_url}
			data-img={SingleProduct.gallery[0].main_url}
			data-thumb={SingleProduct.gallery[0].main_url}
			data-width="780"
			data-height="974"
			data-alt="image description"
		>
			<img
				srcset={SingleProduct.gallery[2].main_url}
				src={SingleProduct.gallery[0].main_url}
				alt="ima"
				class="w-52"
			/>
		</a>
		<a
			href={SingleProduct.gallery[1].main_url}
			data-img={SingleProduct.gallery[1].main_url}
			data-thumb={SingleProduct.gallery[1].main_url}
			data-alt="image description"
			data-width="780"
			data-height="974"
		>
			<img
				srcset={SingleProduct.gallery[2].main_url}
				src={SingleProduct.gallery[1].main_url}
				alt="ima"
				class="w-52"
			/>
		</a>
		<a
			href={SingleProduct.gallery[1].main_url}
			data-img={SingleProduct.gallery[1].main_url}
			data-thumb={SingleProduct.gallery[1].main_url}
			data-alt="image description"
			data-width="780"
			data-height="974"
		>
			<img
				srcset={SingleProduct.gallery[2].main_url}
				src={SingleProduct.gallery[2].main_url}
				alt="ima"
				class="w-52"
			/>
		</a>
	{:else}
		<h1 class=" w-full text-center">Loading...</h1>
	{/if}
</div>
