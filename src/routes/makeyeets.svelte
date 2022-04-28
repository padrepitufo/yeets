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
	import { postYeets } from "$lib/yeets.js";
    import TextInput from "$lib/nenasudemy/TextInput.svelte";
    import Button from "$lib/nenasudemy/Button.svelte";

    let title = '';
    let content = '';


    const addYeet = async () => {
		console.log('thuis isa consule loggerz');
        const resYeets = await postYeets(title, content);
        console.log(resYeets);
	};
</script>

<main>
	<form on:submit|preventDefault="{addYeet}">
	<TextInput 
		id="title" 
		label="Title" 
		type="text"
		value={title} 
		on:input={event => (title = event.target.value)} />
	<TextInput 
		id="content" 
		label="Content" 
		controlType="textarea"
		value={content} 
		on:input={event => (content = event.target.value)} />
    <Button type="submit" caption="Post"/>
    </form>
</main>

        