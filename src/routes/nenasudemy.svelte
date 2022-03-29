<!-- ACTUALLY FOLLOWING UDEMY STUFF -->


<!-- CONTACT CARD PROJECT COMPLETE // FINAL PRODUCT -->

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
        id:Math.random(),
        name: name,
        jobTitle: title,
        imageUrl: image,
        desc: description
      }
    ];
    formState = "done";
  }
  function deleteFirst() {
    createdContacts = createdContacts.slice(1);
  }
  function deleteLast() {
    createdContacts = createdContacts.slice(0,-1);
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
    color: rgb(255, 109, 128);
    font-family: 'Hind Siliguri', sans-serif;
    text-shadow:1px 1px #ebeff3;
  }

  .pbegin {
    color: rgb(82, 97, 90);
  }


  /* html, body {
    position: relative;
    width: 100%;
    height: 100%;
  } */

  /* body {
    color: #333;
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  } */

  /* a {
    color: rgb(0,100,200);
    text-decoration: none;
  } */

  /* a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: rgb(0,80,160);
  } */

  label {
    display: block;
  }

  input, button, /*select*/ textarea {
    font-family: inherit;
    font-size: inherit;
    -webkit-padding: 0.4em 0;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-shadow: 2px 2px 3px -01px rgb(203, 224, 233);
  }

  input:disabled {
    color: rgb(99, 15, 155);
  }

  button {
    color: rgb(112, 120, 146);
    background-color: #f9fdff;
    outline: none;
    font-family: 'Hind Siliguri', sans-serif;
  }
  

  button:disabled {
    color: rgb(129, 112, 113);
  }

  button:not(:disabled):active {
    background-color: rgb(196, 255, 247);
  }

  button:focus {
    border-color: rgb(169, 230, 231);
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
</div>

<button on:click={addContact}>Add Contact Card</button>
<button on:click={deleteFirst}>Delete First</button>
<button on:click={deleteLast}>Delete Last</button>

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