<!-- ACTUALLY FOLLOWING UDEMY STUFF -->


<script>
  import meatups from "$lib/nenasudemy/meatups-store.js";
	import Hederr from "$lib/nenasudemy/Hederr.svelte";
	import MeatUpGrid from "$lib/nenasudemy/MeatUpGrid.svelte";
	// import TextInput from "$lib/nenasudemy/TextInput.svelte";
	import Button from "$lib/nenasudemy/Button.svelte";
	import EditNewMeatup from "$lib/nenasudemy/EditNewMeatup.svelte";
  import MeatUpDetails from "$lib/nenasudemy/MeatUpDetails.svelte";
		
	// let meatups = ;

  let editMode;
  let editedId;
  let page = "overview";
  let pageData = {};

  function savedMeatup(event) {
    editMode = null;
    editedId = null;
  }

  function cancelEdit() {
    editMode = null;
    editedId = null;
  }

  function showDetails(event) {
    page = "details";
    pageData.id = event.detail;
  }

  function closeDetails() {
    page = 'overview';
    pageData = {};
  }

  function startEdit(event) {
    editMode = 'edit';
    editedId = event.detail;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Hederr />

<main>
  {#if page === 'overview'}
    {#if editMode === 'edit'}
      <EditNewMeatup id={editedId} on:save={savedMeatup} on:cancel={cancelEdit} />
    {/if}
    <MeatUpGrid meatups={$meatups} on:showDetails={showDetails} on:edit={startEdit} on:add={() => {editMode = 'edit'}} />
  {:else}
    <MeatUpDetails id={pageData.id} on:close={closeDetails} />
  {/if}
</main>