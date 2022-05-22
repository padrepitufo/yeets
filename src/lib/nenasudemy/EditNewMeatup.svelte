<script>
    import { createEventDispatcher } from "svelte";
    import TextInput from "$lib/nenasudemy/TextInput.svelte";
    import Button from "$lib/nenasudemy/Button.svelte";
    import Modal from "$lib/nenasudemy/Modal.svelte";
    import { isEmpty, isValidEmail } from "$lib/nenasudemy/validation.js";
    import meatups from "$lib/nenasudemy/meatups-store.js";

    export let id = null;

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageUrl = "";

  if (id) {
    const unsubscribe = meatups.subscribe(items => {
      const selectedMeatup = items.find(i => i.id === id);
      title = selectedMeatup.title;
      subtitle = selectedMeatup.subtitle;
      address = selectedMeatup.address;
      email = selectedMeatup.contactEmail;
      description = selectedMeatup.description;
      imageUrl = selectedMeatup.imageUrl;
    });

    unsubscribe();
  }
  
  

  const dispatch = createEventDispatcher();

  $: titleValid = !isEmpty(title);
  $: subtitleValid = !isEmpty(subtitle);
  $: addressValid = !isEmpty(address);
  $: descriptionValid = !isEmpty(description);
  $: imageUrlValid = !isEmpty(imageUrl);
  $: emailValid = isValidEmail(email);
  $: formIsValid =
    titleValid &&
    subtitleValid &&
    addressValid &&
    descriptionValid &&
    imageUrlValid &&
    emailValid;

  function submitForm() {
    const meatupData = {
      title: title,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      contactEmail: email,
      address: address
  };


    // meatups.push(newMeatup); // DOES NOT WORK!
    if (id) {
      meatups.updateMeatup(id,meatupData);
    } else {
      meatups.addMeatup(meatupData);
    }
    dispatch("save");
  }

  function deleteMeatup() {
    meatups.removeMeatup(id);
    dispatch("save");
  }

  function cancel() {
    dispatch("cancel");
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="New Meatup" on:cancel>
  <form on:submit={submitForm}>
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
      valid={subtitleValid}
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
      valid={imageUrlValid}
      validityMessage="Please enter a valid image url."
      value={imageUrl}
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      id="email"
      label="E-Mail"
      type="email"
      valid={emailValid}
      validityMessage="Please enter a valid email address."
      value={email}
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      valid={descriptionValid}
      validityMessage="Please enter a valid description."
      bind:value={description} />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>
      Save
    </Button>
    {#if id}
      <Button type="button" on:click={deleteMeatup}>Delete</Button>
    {/if}
  </div>
</Modal>