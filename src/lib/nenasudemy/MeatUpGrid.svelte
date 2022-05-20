
<style>
    section {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
  }
    @media (min-width: 768px) {
      section {
        grid-template-columns: repeat(2, 1fr);
      }
  }
  </style>
  
  
  <script>
    import MeatUpsItem from "$lib/nenasudemy/MeatUpsItem.svelte";

    export let meatups;
  </script>
  
  
  
<section id="meatups">
  {#each meatups as meatup}
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
    />
  {/each}
</section>