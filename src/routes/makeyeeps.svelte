<style>
    main {
		margin-top: 5rem;
	}

	form {
		width: 30 rem;
		max-width:90%;
		margin:auto;
        font-family: "Roboto Slab", sans-serif;
	}
</style>

<script>
	import { createYeeps } from "$lib/yeets.js";
    import TextInput from "$lib/nenasudemy/TextInput.svelte";
    import Button from "$lib/nenasudemy/Button.svelte";

    let sign = '';


    const addYeeps = async () => {
        await createYeeps(sign);
	};
</script>

<main>
	<form on:submit|preventDefault="{addYeeps}">
	<TextInput 
		id="sign" 
		label="Username" 
		type="text"
		value={sign} 
		on:input={event => (sign = event.target.value)} />
    <Button type="submit" caption="Post"> Submit</Button>
    </form>
</main>

        