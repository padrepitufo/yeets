<!-- ACTUALLY FOLLOWING UDEMY STUFF -->

<script>
  import ContactCard from "$lib/ContactCard.svelte";
  let name = 'You';
  let title = "";
  let image = "";
  let description = "";
  let formState = "empty";

  let createdContacts = [];

  function addContact() {
    if (
      name.trim().length == 0 ||
      title.trim().length == 0 ||
      image.trim().length == 0 ||
      description.trim().length == 0
    ) {
        formState = "invalid";
        alert("Missing Input! Please fill out all the boxes! - yeets.me 😊");
        return;
      }
      createdContacts = [
      ...createdContacts,
      {
        name: name,
        jobTitle: title,
        imageUrl: image,
        desc: description
      }
    ];
    formState = "done";
  }

</script>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap');   
    
    #form {
        width: 30rem;
        max-width: 100%;
        font-family: 'Hind Siliguri', sans-serif;
    }
    p {
      color: crimson;
      font-family: 'Hind Siliguri', sans-serif;
      text-shadow:1px 1px #ebeff3;
    }

    .pbegin {
      color: rgb(82, 97, 90);
    }
</style>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
</div>>

<button on:click={addContact}>Add Contact Card</button>

{#if formState === 'invalid'}
<p>Invalid input.</p>
{:else}
  <p class="pbegin">Please fill out the boxes! Then, once you're done, hit the button!!</p>
  {/if}

  {#each createdContacts as contact, i}
    <h2># {i + 1}</h2>
    <ContactCard
      userName={contact.name}
      jobTitle={contact.jobTitle}
      description={contact.desc}
      userImage={contact.imageUrl} />
  {:else}
    <p>Please start adding some contacts, we found none!</p>
  {/each}