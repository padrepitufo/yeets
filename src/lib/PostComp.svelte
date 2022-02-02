<script>
    // import Header from "$lib/header.svelte";
    export let PostTitle;
    export let PostContent;
    export let PostDate;

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
        color:rgb(255, 172, 77);
        border: none;
        font-family: Sans;
        font-size: 10;
        background-color:rgb(255, 255, 255);
    }
    .PostComp{
        border-style: ridge;
    }
    h3{
      text-decoration: underline; 
      text-decoration-color: rgb(255, 172, 77); 
    }
    .tumby{
        color:goldenrod;
    }
</style>


<div class="PostComp">
    <h3>{PostTitle}</h3>
    <p>{PostContent}</p>
    <sub>Posted {PostDate}</sub>
    <br>
    <br>
    <div class="tumby">
        <button on:click="{thumbsup}">👍</button>
        <button on:click="{thumbsdown}">👎</button>
        {likes}
    </div>
</div>
