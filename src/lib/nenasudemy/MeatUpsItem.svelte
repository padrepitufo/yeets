<!-- putu onu pausu -->

<script>
    import { createEventDispatcher } from "svelte";
    import meatups from "$lib/nenasudemy/meatups-store.js";
    import Button from "$lib/nenasudemy/Button.svelte";
    import Badge from "$lib/nenasudemy/Badge.svelte";

  export let id;
  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
  // export let email;
  export let isFav;

  const dispatch = createEventDispatcher();

  function toggleFavorite() {
    meatups.toggleFavorite(id);
  };

</script>


 <style>
    @import url('https://fonts.googleapis.com/css?family=Lato|Roboto+Slab');
    @import url('https://fonts.googleapis.com/css2?family=Anek+Tamil:wdth,wght@87.1,400;100,300&family=Hind+Siliguri&display=swap');
   
   
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.50rem;
    margin: 0.5rem 0;
    font-family: 'Anek Tamil', sans-serif;
  }

  h2 {
    font-family: 'Anek Tamil', sans-serif;
    font-size: 1rem;
    color: #947c97;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
    font-family: 'Anek Tamil', sans-serif;
  }

  div {
    text-align: right;
  }

  .content {
    height:4rem;
  }

   </style>
 
 <!-- Card thing o//o -->

 <article>
  <header>
    <h1>
      {title}
      {#if isFav}
        <Badge>FAVORITE</Badge>
      {/if}
    </h1>
    <h2>{subtitle}</h2>
    <p>{address}</p>
  </header>
  <div class="image">
    <img src={imageUrl} alt={title} />
  </div>
  <div class="content">
    <p>{description}</p>
  </div>
  <footer>
    <Button mode="outline" type="button" on:click={() => dispatch('edit', id)}>
      Edit
    </Button>
    <Button
      mode="outline"
      color={isFav ? null : 'success'}
      type="button"
      on:click={toggleFavorite}>
      {isFav ? 'Unfavorite' : 'Favorite'}
    </Button>
    <Button type="button" on:click={() => dispatch('showDetails', id)}>
      Show Details
    </Button>
  </footer>
</article>