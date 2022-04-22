<script>
	import { tick } from 'svelte';
	import Product from '$lib/nenasudemy/Product.svelte';
	import Modal from '$lib/nenasudemy/Modal.svelte'

	let products = [
		{
			id: 'product1',
			title: 'A Hard Cover Book',
			price: 12.99,
		}
	]

		let text = 'Ventriloquist Dummy Text That You Can Edit-- 😳😳😳';
		let showModal = false;
		let closeable = false;
		
	function addToCart(event) {
		console.log(event); 
	}

	function deleteProduct(event) {
		console.log(event.detail);
	}

	function transform(event) {
		if (event.which !== 9) {
			return;
		}
		event.preventDefault();

		const selectionStart = event.target.selectionStart;
		const selectionEnd = event.target.selectionEnd;
		const value = event.target.value

		text = value.slice(0, selectionStart) +
			value.slice(selectionStart, selectionEnd).toUpperCase() +
			value.slice(selectionEnd);
		
		tick().then(() => {
			event.target.selectionStart = selectionStart;
			event.target.selectionEnd = selectionEnd;

		});
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
			<button slot="footer" on:click={() => (showModal = false)} disabled={!closeable}>Confirm</button>
	</Modal>
{/if}

<textarea rows="5" value={text} on:keydown={transform}></textarea> 
