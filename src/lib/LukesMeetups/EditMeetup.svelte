<script>
    import { createEventDispatcher } from "svelte";
    import TextInput from "$lib/LukesMeetups/TextInput.svelte";
    import Button from "$lib/LukesMeetups/Button.svelte";
import { add_render_callback } from "svelte/internal";

    let title = '';
    let subtitle = '';
    let address = ''; 
    let email = '';
    let description = '';
    let imageUrl = '';

    const dispatch = createEventDispatcher();

    function submitForm() {
        dispatch('save', {
            title: title,
            subtitle: subtitle,
            address: address,
            email: email,
            description: description,
            imageUrl: imageUrl,
        });
    }
</script>

<style>
    form {
            width: 30rem;
            max-width: 90%;
            margin: auto;
        }
</style>


<form on:submit|preventDefault={submitForm}>
    <TextInput 
    id="title"
    label="Title"  
    value={title} 
    on:input={(event) => title = event.target.value} />
    <TextInput 
    id="subtitle"
    label="Subtitle" 
    value={subtitle} 
    on:input={(event) => subtitle = event.target.value} />
    <TextInput 
    id="address"
    label="Adress"
    value={address} 
    on:input={(event) => address = event.target.value} />
    <TextInput 
    id="imageUrl"
    label="Image URL" 
    value={imageUrl} 
    on:input={(event) => imageUrl = event.target.value} />
    <TextInput 
    id="email"
    label="E-mail"  
    type="email"
    value={email}
    on:input={(event) => email = event.target.value} />
     <TextInput 
     id="description"
     label="Description" 
     controlType="text" 
     value={description} 
     on:input={(event) => description = event.target.value} />
     <Button type="submit">Save</Button>
 </form>