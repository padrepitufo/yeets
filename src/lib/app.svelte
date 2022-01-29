<script>
    let name = "Nena's Face";
    let age = "As Old As Your Mom";
    let likes = 0;

    function incrementLikes() {
        likes += 1;
    };
</script>

<style> 
    h1 {
        color: purple;
    }
</style>

<h1>Hello! I Am {name}, And I Am {age}!</h1>
<button on:click="{incrementLikes}">Thumbs up {likes}</button>