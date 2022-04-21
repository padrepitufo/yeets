<script>
    import { createEventDispatcher } from 'svelte';

    export let title;
    export let price;
    export let bestSeller = false;

    const dispatch = createEventDispatcher();

    function addToCart() {
        dispatch('add-to-cart', {id:'p1'});
    }

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    h1 {
        font-family: 'Open Sans', sans-serif;
    }
</style>

<article>
    <h1>{title}</h1>
    <h2>${price}</h2>
    {#if bestSeller}
    <h3>BESTSELLER</h3>
    {/if}
    <button on:click="{addToCart}">Add to Cart</button>
    <button on:click="{() => {dispatch('delete', 'p1')}}">Delete</button>
</article>