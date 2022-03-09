<!-- ACTUALLY FOLLOWING UDEMY STUFF -->

<script>
    import ContactCard from "$lib/ContactCard.svelte";
    let name = 'Insert';
    let age = 2;
    let title = "";
    let profilePic = "";
    let description = "";

// let uppercaseName; not required! - not using too~

$: beegerName = name.toUpperCase();

$: console.log(name);

$: if(name === 'Fina') {
    console.log('Deez Nuts');
    age = 69;
} else {
    age = 2;
}

    function incrementToshi() {
        age += 1;
    }
    function changeNamaeDesu() {
        name = 'Fina';
    }
    function namaeInput(event) {
        const enteredValue = event.target.value;
        name = enteredValue;
    }
</script>

<style>



    @import url('https://fonts.googleapis.com/css?family=Lato|Roboto+Slab');

    * {
      box-sizing: border-box;
    }

    /* html,
    body {
        position: relative;
        width: 100%;
        height: 100%;
        font-family: 'Lato', sans-serif;
    }

    body {
        color: #333;
        margin: 0;
        padding: 2rem;
        background: #f3f3f3;
    } */

    button {
        font: inherit;
        border: 1px solid #cf0056;
        background: #cf0056;
        padding: 0.5rem 1rem;
        color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
        cursor: pointer;
    }

    button:hover,
    button:active {
        background: #e40763;
        border-color: #e40763;
        box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
    }
    h1{
        color:rgb(107, 194, 197);
    }
    /* #form {
    width: 30rem;
    max-width: 100%;
  } */

</style>

<h1>Konnichiwa! Watashi wa {name} desu. {age}-sai desu! </h1>
<button on:click="{incrementToshi}">Nenrei o kaeyou!</button>

<!-- Old Un-Used Buttons -->
<!-- <button on:click="{changeNamaeDesu}">Namae o henkō suru!</button>  Change name button --> 
<!-- <input type="text" value="{name}" on:input="{namaeInput}"> Type out a name button -->

<input type="text" bind:value="{name}"> Shortcut from the above versions!!
<input type="text" bind:value="{title}">
<input type="text" bind:value="{profilePic}">
<textarea rows="3" bind:value="{description}"></textarea>

<!-- <div id="form">
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
      <input type="text" bind:value={profilePic} id="image" />
    </div>
    <div class="form-control">
      <label for="desc">Description</label>
      <textarea rows="3" bind:value={description} id="desc" />
    </div>
  </div> -->

<ContactCard 
userNamae={name} 
jobNamae={title} 
profilePikuu={profilePic} 
shortDeskuu={description}
></ContactCard>
