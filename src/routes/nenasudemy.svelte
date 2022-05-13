<!-- ACTUALLY FOLLOWING UDEMY STUFF -->


<script>
  import meatups from "$lib/nenasudemy/meatups-store.js";
	import Hederr from "$lib/nenasudemy/Hederr.svelte";
	import MeatUpGrid from "$lib/nenasudemy/MeatUpGrid.svelte";
	// import TextInput from "$lib/nenasudemy/TextInput.svelte";
	import Button from "$lib/nenasudemy/Button.svelte";
	import EditNewMeatup from "$lib/nenasudemy/EditNewMeatup.svelte";
		
	// let meatups = ;

  let editMode;

  function addMeatup(event) {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
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
  <div class="meatup-controls">
    <Button on:click={() => (editMode = 'add')}>New Meatup</Button>
  </div>
  {#if editMode === 'add'}
    <EditNewMeatup on:save={addMeatup} on:cancel={cancelEdit} />
  {/if}
  <MeatUpGrid meatups={$meatups}/>
</main>