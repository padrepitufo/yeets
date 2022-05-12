<!-- ACTUALLY FOLLOWING UDEMY STUFF -->


<script>
	import Cart from "$lib/nenasudemy/Cart.svelte";
	import Products from "$lib/nenasudemy/Products.svelte";
  import Button from "$lib/nenasudemy/Button.svelte";
  import { timer } from "$lib/nenasudemy/timer-store.js";

  let showCart = true;

  // timer.subscribe(count => {
  //   console.log('App: ' + count);
  // })

</script>
  

<Button on:click={() => {showCart = !showCart}}>Toggle Cart</Button>

{#if showCart}
  <Cart />
{/if}
<Products />

<!-- <p>Count: {$timer}</p> -->