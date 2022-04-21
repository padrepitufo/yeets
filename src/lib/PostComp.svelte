<!-- Blog Post Component. NENAS-- NO TOCHI ANGRYCATTOE -->

<script>
    import { onMount } from 'svelte';
    export let postTitle;
    export let postContent;
    export let postDate;
    export let yeetId;
    import axios from "axios";
    import { 
        getStars,
        giveStars,
        takeStars 
    } from "$lib/yeets.js";

    const api = axios.create({
        baseURL: "http://localhost:8081"
    });
    let name = "Nena's Face";
    let age = "As Old As Your Mom";
    let likes = 0;
    onMount(async () => {
       const thumbs = await getStars(yeetId);
       for (const thumb of thumbs) {
           likes = likes + thumb.rating;
       }
       console.log(thumbs);
    });

    const thumbsup  = async () => {
        const response = await giveStars(yeetId);
        console.log(response);
        console.error("increment likes!");
        likes += 1;
    };

    const thumbsdown  = async () => {
        console.error("decrementing likes");
        const response = await takeStars(yeetId);
        likes -= 1;
        api.get("/stars/")
        .then(res => {
            console.log(`got data ${res.data}`);
            return Promise.resolve(res.data);
        })
        .catch(err => {
            console.log(`got err ${err}`);
            return Promise.reject(err);
        });
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
        <button on:click="{thumbsup}">👍</button>
        <button on:click="{thumbsdown}">👎</button>
        {likes}
    </div>
</div>
