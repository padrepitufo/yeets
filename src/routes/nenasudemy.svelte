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
  let page = "overview";
  let pageData = {};

  function addMeatup(event) {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
  }

  function showDetails(event) {
    page = "details";
    pageData.id = event.detail;
  }

  function closeDetails() {
    page = 'overview';
    pageData = {};
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meatup-controls {
    margin: 1rem;
  }
</style>

<Hederr />

<main>
  {#if page === 'overview'}
    <div class="meatup-controls">
      <Button on:click={() => (editMode = 'add')}>New Meatup</Button>
    </div>
    {#if editMode === 'add'}
      <EditNewMeatup on:save={addMeatup} on:cancel={cancelEdit} />
    {/if}
    <MeatUpGrid meatups={$meatups} on:showDetails={showDetails} />
  {:else}
    <MeatUpDetails id={pageData.id} on:close={closeDetails} />
  {/if}
</main>