<script>
    import { onDestroy, createEventDispatcher } from "svelte";
    import meatups from "$lib/nenasudemy/meatups-store.js";
    import Button from "$lib/nenasudemy/Button.svelte";
    
    export let id;

    let selectedMeatup;

    const unsubscribe = meatups.subscribe(items => {
        selectedMeatup = items.find(i => i.id === id);
    });

    const dispatch = createEventDispatcher();

    onDestroy(() => {
        unsubscribe();
    });
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Lato|Roboto+Slab');
    @import url('https://fonts.googleapis.com/css2?family=Anek+Tamil:wdth,wght@87.1,400;100,300&family=Hind+Siliguri&display=swap');
    section {
    margin-top: 4rem;
    }

    .image {
    width: 100%;
    height: 25rem;
    }

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    .image {
    background: #e7e7e7;
    }

    .content {
    text-align: center;
    width: 80%;
    margin: auto;
    }

    h1 {
    font-size: 2rem;
    font-family: 'Anek Tamil', sans-serif;
    margin: 0.5rem 0;
    }

    h2 {
    font-size: 1.25rem;
    color: #6b6b6b;
    font-family: 'Anek Tamil', sans-serif;
    }

    p {
    font-size: 1.5rem;
    font-family: 'Anek Tamil', sans-serif;
    }
</style>

<section>
    <div class="image">
        <img src={selectedMeatup.imageUrl} alt={selectedMeatup.title} />
    </div>
    <div class="content">
    <h1>{selectedMeatup.title}</h1>
    <h2>{selectedMeatup.subtitle} - {selectedMeatup.address}</h2>
    <p>{selectedMeatup.description}</p>
    <Button href="mailto:{selectedMeatup.contactEmail}">Contact</Button>
    <Button type="button" mode="outline" on:click={() => dispatch('close')}>
        Close
    </Button>
    </div>
</section>