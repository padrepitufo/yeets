
<style>

    form {
		width: 100%;
	}

</style> 

<script>
    import { createEventDispatcher } from 'svelte';
    import TextInput from "$lib/nenasudemy/TextInput.svelte";
	import Button from "$lib/nenasudemy/Button.svelte";
    import Modal from "$lib/nenasudemy/Modal.svelte";
    import { isEmpty, isValidEmail, isValidURL } from '$lib/nenasudemy/validation.js';
      
	let title = '';
	let subtitle = '';
	let address = '';
	let description = '';
	let email = '';
	let imageUrl = '';

    const dispatch = createEventDispatcher();

    $: titleValid = !isEmpty(title);
    $: subTitleValid = !isEmpty(subtitle);
    $: addressValid = !isEmpty(address);
    $: descriptionValid = !isEmpty(description);
    $: emailValid = isValidEmail(email);
    // $: imageValid = isValidURL(imageUrl);
    $: imageValid = !isEmpty(imageUrl);
    $: formIsValid = 
        title && 
        subTitleValid && 
        addressValid && 
        imageValid && 
        descriptionValid &&
        emailValid;

    // function addMeatup () {
	// 	const newMeatup = {
	// 		id: Math.random().toString(),
	// 		title: title,
	// 		subtitle: subtitle,
	// 		description: description,
	// 		imageUrl: imageUrl,
	// 		contactEmail: email,s
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

        function cancel() {
            dispatch('cancel');
        }
</script>

 <Modal title="Add Meatup" on:cancel>

    <form on:submit|preventDefault="{submitForm}">
        <TextInput 
            id="title" 
            label="Title" 
            valid={titleValid}
            validityMessage="Please enter a valid title."
            value={title} 
            on:input={event => (title = event.target.value)} />
        <TextInput 
            id="subtitle" 
            label="Subtitle" 
            valid={subTitleValid}
            validityMessage="Please enter a valid subtitle."
            value={subtitle} 
            on:input={event => (subtitle = event.target.value)} />
        <TextInput 
            id="address" 
            label="Address" 
            valid={addressValid}
            validityMessage="Please enter a valid address."
            value={address} 
            on:input={event => (address = event.target.value)} />
        <TextInput 
            id="imageUrl" 
            label="Image URL" 
            valid={imageValid}
            validityMessage="Please enter a valid image URL."
            value={imageUrl} 
            on:input={event => (imageUrl = event.target.value)} />
        <TextInput 
            id="email" 
            label="E-Mail" 
            valid={emailValid}
            validityMessage="Please enter a valid email address."
            value={email} 
            type="email"
            on:input={event => (email = event.target.value)} />
        <TextInput 
            id="description" 
            label="Description" 
            controlType="textarea"
            valid={descriptionValid}
            validityMessage="Please enter a valid description"
            bind:value={description} />
        
    </form>
    <div slot="footer">
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="button" on:click={submitForm} disabled={!formIsValid}>Save</Button>
    </div>
</Modal>