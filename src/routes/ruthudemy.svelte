<script>
    import ContactCarddd from "$lib/ruthsudemy/ContactCarddd.svelte";
  
    let name = "Max";
    let title = "";
    let image = "";
    let description = "";
    let formState = 'empty';

    let createdContacts = [];

    function addContact() {
        //event.preventDefault();
        if (
            name.trim().length == 0 ||
            title.trim().length == 0 ||
            image.trim().length == 0 ||
            description.trim().length == 0
            ) {
        formState = 'invalid';
        return;
    }
    createdContacts = [
        ...createdContacts,
    {
        name: name, 
        jobTitle: title, 
        imageUrl: image, 
        desc: description
    }];

    formState = 'done';
}

function deleteFirst () {
    createdContacts = createdContacts.slice(1);
}

function deleteLast () {
    createdContacts = createdContacts.slice(0, -1);
}
  </script>
  
  <style>
    #form {
      width: 30rem;
      max-width: 100%;
      margin: 1rem 0;
    }
  </style>


  
  <form id="form">
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
    <button on:click|preventDefault={addContact} type="submit">Add Contact Card</button>
</form>


  <button on:click={(event) => createdContacts = createdContacts.slice(1)}
    >Delete Joe First Card
</button>
  <button on:click={deleteLast}>Delete Joe Last Card</button>
  
  {#if formState === 'invalid'}
  <p>Invalid input.😡</p>
  {:else}
  <p>Please enter some data and press the button!👍</p>
  {/if}

  {#each createdContacts as contact, i}
    <p># {i + 1}</p>
  <ContactCarddd 
  userName={contact.name} 
  jobTitle={contact.jobTitle} 
  description={contact.desc}
  userImage={contact.imageUrl} />
  {:else}
    <p>Enter data 🦮 and then you can have as Many contact cards 🫂 as you want!🤝 Just keep pressing the 🔴 button!</p>
  {/each}