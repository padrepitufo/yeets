<!-- Nena's stoof. Not tochi! Angrycattoe uwu/ -->

<script>
    let name = "Nena's Face";
    let age = "As Old As Your Mom";
    let likes = 0;

function incrementLikes() {
    likes += 1;
};
</script>

<style>
    button {
        color:rgb(255, 172, 77);
        font-family: Sans;
        font-size: 5;
        border-color: rgb(72, 118, 155);
        background-color:rgb(255, 255, 255);
    }
    h1 {
        color:seagreen;
    }
</style>


<svelte:head>
    <title>Yeets | About</title>
</svelte:head>

<h1>Hello! I Am {name}, And I Am {age}!</h1>
<p>This is the beginning of an awesome site. Right now, we're learning how to program. Yayyyy /s. Here's some exampleworkcrap--</p>

<button on:click="{incrementLikes}">Thumbs up {likes}</button>








