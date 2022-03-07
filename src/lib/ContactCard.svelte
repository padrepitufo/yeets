<!-- Hey ruthi! Nena was using this, sorryy. But we can do it together B) -->
<script>
    import ContactCard from "$lib/ContactCard.svelte";

  export let userNamae;
  export let jobNamae;
  export let shortDeskuu;
  export let profilePikuu;
</script>

<style>
.contact-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    max-width: 30rem;
    border-radius: 5px;
    margin: 1rem 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7rem;
  }

  .thumb {
    width: 33%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .user-data {
    width: 67%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5px;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", sans-serif;
    margin: 0.5rem 0;
    color: rgb(107, 194, 197);
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: #5a5a5a;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .description {
    border-top: 1px solid #ccc;
    padding: 1rem;
  }

</style>


<div class="contact-card">
    <header>
      <div class="thumb">
        <img src="{profilePikuu}" alt="{userNamae}" />
      </div>
      <div class="user-data">
        <h1>{userNamae}</h1>
        <h2>{jobNamae}</h2>
      </div>
    </header>
    <div class="description">
      <p>{shortDeskuu}</p>
    </div>
  </div>

