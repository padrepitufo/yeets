<script>
    // import Header from "$lib/header.svelte";
    export let postTitle;
    export let postContent;
    export let postDate;

    let likes = 0;

    function thumbsup () {
        likes += 1;
    };

    function thumbsdown() {
        likes -= 1;
    };
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
    <br>
    <br>
    <div class="tumby">
        <button on:click="{thumbsup}">👍</button>
        <button on:click="{thumbsdown}">👎</button>
        {likes}
    </div>
</div>
