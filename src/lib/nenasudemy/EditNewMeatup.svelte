<style>

    form {
		width: 30 rem;
		max-width:90%;
		margin:auto;
	}

</style> 

<script>
    import { createEventDispatcher } from 'svelte';
    import TextInput from "$lib/nenasudemy/TextInput.svelte";
	import Button from "$lib/nenasudemy/Button.svelte";
      
	let title = '';
	let subtitle = '';
	let address = '';
	let description = '';
	let email = '';
	let imageUrl = '';

    const dispatch = createEventDispatcher();

    // function addMeatup () {
	// 	const newMeatup = {
	// 		id: Math.random().toString(),
	// 		title: title,
	// 		subtitle: subtitle,
	// 		description: description,
	// 		imageUrl: imageUrl,
	// 		contactEmail: email,
	// 		address: address
	// 	};
	// 		meatups = [newMeatup,...meatups];
	// };

        function submitForm() {
            dispatch('save', {
                title: title,
			    subtitle: subtitle,
			    description: description,
		    	imageUrl: imageUrl,
			    email: email,
		    	address: address
            });
        };
</script>


<form on:submit|preventDefault="{submitForm}">
    <TextInput 
        id="title" 
        label="Title" 
        value={title} 
        on:input={event => (title = event.target.value)} />
    <TextInput 
        id="subtitle" 
        label="Subtitle" 
        value={subtitle} 
        on:input={event => (subtitle = event.target.value)} />
    <TextInput 
        id="address" 
        label="Address" 
        value={address} 
        on:input={event => (address = event.target.value)} />
    <TextInput 
        id="imageUrl" 
        label="Image URL" 
        value={imageUrl} 
        on:input={event => (imageUrl = event.target.value)} />
    <TextInput 
        id="email" 
        label="E-Mail" 
        value={email} 
        type="email"
        on:input={event => (email = event.target.value)} />
    <TextInput 
        id="description" 
        label="Description" 
        value={description} 
        controlType="textarea"
        rows="3"
        on:input={event => (description = event.target.value)} />
        <Button type="submit" caption="Save"/>
    </form>