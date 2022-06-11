<script>
    // import { isValidEmail } from "$lib/LukesMeetups/valid";
    import Hedar from "$lib/LukesMeetups/Hedar.svelte";  
    import MeetupGrid from "$lib/LukesMeetups/MeetupGrid.svelte";
    import TextInput from "$lib/LukesMeetups/TextInput.svelte";
    import Button from "$lib/LukesMeetups/Button.svelte";
    import EditMeetup from "$lib/LukesMeetups/EditMeetup.svelte";
    import Cart from "$lib/LukesMeetups/Cart.svelte";
    import Products from "$lib/LukesMeetups/Products.svelte";

let showCart = true;
</script>

<Button on:click={() => {showCart = !showCart}}>Togglec Cart</Button>
{#if showCart}
<Cart />
{/if}
<Products /> 
