<!-- putu onu pausu -->

<style>
    #meatups {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
  }

  #meatup-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }
    @media (min-width: 768px) {
      #meatups {
        grid-template-columns: repeat(2, 1fr);
      }
  }
  </style>
  
  
  <script>
      import { createEventDispatcher } from "svelte";
    import MeatUpsItem from "$lib/nenasudemy/MeatUpsItem.svelte";
    import MeatUpFilter from "$lib/nenasudemy/MeatUpFilter.svelte";
    import Button from "$lib/nenasudemy/Button.svelte";

    export let meatups;

    const dispatch = createEventDispatcher();

    let favsOnly = false;

    $: filteredMeatups = favsOnly ? meatups.filter(m => m.isFavorite) : meatups;

    function setFilter(event) {
      favsOnly = event.detail === 1;
    }

  </script>
  
<section id="meatup-controls">
  <MeatUpFilter on:select="{setFilter}"/>
  <Button on:click={() => dispatch('add')}>New Meatup</Button>
</section>
  
<section id="meatups">
  {#each filteredMeatups as meatup}
    <MeatUpsItem 
      id={meatup.id}
      title={meatup.title} 
      subtitle={meatup.subtitle} 
      description={meatup.description}
      imageUrl={meatup.imageUrl}
      email={meatup.contactEmail}
      address={meatup.address}
      isFav={meatup.isFavorite}
      on:showDetails 
      on:edit
    />
  {/each}
</section>