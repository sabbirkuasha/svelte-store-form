<script>
	import BiggerPicture from 'bigger-picture/svelte';

	// import style
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
		const rsp = await fetch(`https://app.deshal.net/api/getProductDetails/pushpo-kontok`, {
			headers: {
				Accept: 'application/json'
			}
		});

		let response = await rsp.json();
		SingleProduct = response.data;
		console.log(SingleProduct);
		allProductImages = SingleProduct?.gallery;
		productCode = SingleProduct?.code;

		bp = BiggerPicture({
			target: document.body
		});

		// grab image links
		imageLinks = document.querySelectorAll('#tris > a');
		imageLinks.forEach((imageLink) => {
			imageLink.addEventListener('click', openGallery);
		});
	});

	// function to open BiggerPicture
	function openGallery(e) {
		e.preventDefault();
		//console.log(imageLinks);
		bp.open({
			items: imageLinks,
			el: e.currentTarget
		});
	}
</script>

<div class="p-5 text-center">
	<h1>Light Box experiment...</h1>
</div>

<div id="tris" class="tris ">
	{#if SingleProduct}
		<a
			href={SingleProduct.gallery[0].main_url}
			data-img={SingleProduct.gallery[0].main_url}
			data-thumb={SingleProduct.gallery[0].main_url}
			data-alt="image description"
		>
			<img
				srcset={SingleProduct.gallery[2].main_url}
				src={SingleProduct.gallery[0].main_url}
				alt="ima"
			/>
		</a>
		<a
			href={SingleProduct.gallery[1].main_url}
			data-img={SingleProduct.gallery[1].main_url}
			data-thumb={SingleProduct.gallery[1].main_url}
			data-alt="image description"
		>
			<img
				srcset={SingleProduct.gallery[2].main_url}
				src={SingleProduct.gallery[1].main_url}
				alt="ima"
			/>
		</a>
		<a
			href={SingleProduct.gallery[1].main_url}
			data-img={SingleProduct.gallery[1].main_url}
			data-thumb={SingleProduct.gallery[1].main_url}
			data-alt="image description"
		>
			<img
				srcset={SingleProduct.gallery[2].main_url}
				src={SingleProduct.gallery[2].main_url}
				alt="ima"
			/>
		</a>

		<!-- <Lightbox description="Simple lightbox">
			<img src={SingleProduct.gallery[0].main_url} alt="Simple lightbox" />
		</Lightbox> -->
		<!-- Programmatically controlled lightbox without thumbnail -->
	{:else}
		<h1 class=" w-full text-center">Loading...</h1>
	{/if}
</div>
