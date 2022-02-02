<!-- Nena's stoof. Not tochi! Angrycattoe uwu/ -->

<script>
import Header from "$lib/header.svelte";
import About from "./about.svelte";
import Index from "./index.svelte";
import Layout from "./__layout.svelte";

    let name = "Nena's Face";
    let age = "As Old As Your Mom";
    let likes = 0;

    function incrementLikes() {
        likes += 1;
    };

    function incrementDislikes() {
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
    h1 {
        color:seagreen;
    }
    h2{
        color:rgb(255, 172, 77);
    }
    .blog-post{
        border-style: ridge;
    }
    h3{
      text-decoration: underline; 
      text-decoration-color: rgb(255, 172, 77); 
    }
    .numberolikesodislikes{
        color:goldenrod;
    }
   
</style>


<svelte:head>
    <title>Yeets | About</title>
</svelte:head>

<h1>Hello! I Am {name}, And I Am {age}!</h1>
<sub> Nena's Crappy stoof!! And tests... nu tochi!! - Temm-- err i mean nena </sub>
<h2>!BLOG POSTS!</h2>
<div class="blog-post">
    <h3> Hero too?</h3>
    <p>
        I was hanging out with friends, and we were doing Karaoke. During 
        Karaoke, they picked a song called "Hero too" from the anime My Hero 
        Academia. It's a good anime, but the lyrics of the song playing were
        flawed. "...strength doesn't make a hero. True heroes stand up for
        what they believe." I agree that strength doesn't make a hero, but a 
        hero definitely needs it. They need physical, emotional, and mental 
        strength. I also think that heroes stand up for what they believe in, 
        but standing up for what you believe in doesn't mean you're a hero. 
        Adolf Hitler stood up for what he believed in; did that make him a 
        hero? No. He thought that Jews were the problem, and the only 
        solution was to exterminate them. I trust that the lyric writers had 
        good intentions when making this song, but someone could interpret 
        this severely wrong. Heroes stand up for the right thing, not what 
        they believe.
    </p>
    <sub>Posted Jan 29, 2022 - 1:13 PM </sub>
    <br>
    <br>
    <div class="numberolikesodislikes">
        <button on:click="{incrementLikes}">👍</button>
        <button on:click="{incrementDislikes}" class="numberolikesodislikes">👎</button>
        {likes}
    </div>
</div>


<!-- If statement? -->







