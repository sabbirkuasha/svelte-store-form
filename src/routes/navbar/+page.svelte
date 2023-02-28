<script>
	import { toggle_cart } from './toggle';

	// $: console.log($toggle_cart);

	function toggle1() {
		// closeMiniCart();

		toggle_cart.set(!$toggle_cart);
	}
</script>

<button on:click={toggle1} class="btn btn-primary"> On click</button>

<h1>Status {$toggle_cart}</h1>
