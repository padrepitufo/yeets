<script>
	import Product from '$lib/nenasudemy/Product.svelte';
	import Modal from '$lib/nenasudemy/Modal.svelte'

	let products = [
		{
			id: 'p1',
			title: 'A Hard Cover Book',
			price: 12.99,
		}
	]

		let showModal = false;
		let closeable = false;

	function addToCart(event) {
		console.log(event);
	}

	function deleteProduct(event) {
		console.log(event.detail);
	}
</script>

<style>

</style>

{#each products as product}
	<Product 
		{...product}
		title={product.title}
		price={product.price}
		on:add-to-cart={addToCart}
		on:delete={deleteProduct} />
{/each}

<button on:click="{() => showModal = true}">Show Modal</button>

{#if showModal}
<Modal 
	on:cancel={() => (showModal = false)}
	on:close={() => (showModal = false)}
	let:didAgree={closeable}>
	<h1 slot="header">Hello!</h1>
	<p>This really works!</p>
</Modal>

{/if}