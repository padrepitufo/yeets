<!-- Blog Post Component. NENAS-- NO TOCHI ANGRYCATTOE -->

<script>
    import { onMount } from 'svelte';
    export let postTitle;
    export let postContent;
    export let postDate;
    export let yeetId = undefined;
    import { 
        getStars,
        giveStars,
        takeStars 
    } from "$lib/yeets.js";

    let likes = 0;
    const notAYeet = () => yeetId == undefined;
    onMount(async () => {
        if (notAYeet()) return;
        const thumbs = await getStars(yeetId);
        for (const thumb of thumbs) {
            likes = likes + thumb.rating;
        }
    });

    const thumbsup  = async () => {
        if (notAYeet()) return;
        const response = await giveStars(yeetId);
        console.error("increment likes!");
        likes += 1;
    };

    const thumbsdown  = async () => {
        if (notAYeet()) return;
        console.error("decrementing likes");
        await takeStars(yeetId);
        likes -= 1;
        return getStars();
    };
    
    // import Header from "$lib/header.svelte";
    
</script>

<style>
    button {
        padding-left: 15px;
        color:rgb(255, 255, 255);
        border: hidden;
        background-color: white;
        border-radius: 11px;
        font-family: Sans;
        font-size: 10;
        
    }
    .PostComp{
        border-style: ridge;
        border-radius: 10px;
        box-shadow: 0 5px 8px rgba(221, 173, 84, 0.26);
        margin-bottom: 45px;
    }
    h3{
        padding-left: 71px;
      text-decoration: underline; 
      text-decoration-color: rgb(255, 172, 77); 
    }
    .tumby{
        color:goldenrod;
    }
    .pfpmine{
        border-style: hidden;
        border-width: 2px;
        border-radius: 45px;
        padding:10px;
        float: left;
        width: 10%;
        height: 10%;
        object-fit:scale-down;
    }
    p{
        padding-left: 10px;
        padding-right: 20px;
    }
    sub{
        padding-left: 10px;
        font-weight: bold;
    }
</style>


<div class="PostComp">
    <img
    class="pfpmine"
     src="https://media.discordapp.net/attachments/761745327984082964/938824969469689897/unknown.png" 
     alt="">
    <h3>{postTitle}</h3>
    <p>{postContent}</p>
    <sub>Posted {postDate}</sub>
    <div class="tumby">
        {#if !notAYeet()}
            <button on:click="{thumbsup}">👍</button>
            <button on:click="{thumbsdown}">👎</button>
            {likes}
        {/if}
    </div>
</div>
