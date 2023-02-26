<script>
	import { loading } from '../routes/loading';
</script>

{$loading.status}
{#if $loading.status === 'IDLE'}
	<h1>Loading is available</h1>
{/if}
