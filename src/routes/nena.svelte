<!-- Nena's stoof. Not tochi! Angrycattoe uwu/ -->
      <!-- Only nene may toch >:) uwu -->
  
<script>   
    import PostComp from "$lib/PostComp.svelte"

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

<h1>Hello! I Am not {name}, And I Am {age}!</h1>
<sub> Nena's Crappy stoof!! And tests... nu tochi!! - Temmie 😃-- err i mean nena </sub>
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
<br>
<br>
<PostComp 
    postTitle="Components at Work" 
    postContent=" 
        Instead of writing posts 
        and all the work for it over and over again, I can just use components. Today, in Udemy,
        I learned how to do them again ( I'm saying again because I had already learned them, basically
        this was just a brain refresh ). What you're reading currently, uses components! Isn't that crazy?
        It looks exactly like the post before, but now it will be easier to write 😃. All I have to do 
        now is put in the post date, the post's content, and the post's title. Doing this has cut into my
        math time, but that's okay 👍. If I'm being honest, coding has been getting much more fun.
        I'll be posting more soon, and updating the looks of this page. Until then, though, adios!" 
    postDate="February 2, 2022 - 9:14 AM" 
></PostComp>

<br>
<br>

<PostComp 
    postTitle="Encanto art fandom thoughts." 
    postContent="I have watched several rants and discussion videos about the Encanto fandom. 
        In some parts of the video, these youtubers were talking about how a lot of arguements 
        going on because people aren't 'drawing the characters right (white-washing, outfits, ethnicity)'. 
        First of all, people have their own styles.
        Let them draw it however they want to. Some people have a pastel style, so it's going to be very
        desaturated and more towards white. Just because they didn't draw them to look like their ethnicity doesn't 
        give you permission to just go dis their work. Did you ever think that maybe they're a beginner?
        Or that maybe they forgot, or  don't know how? There is no correct way to do art, so don't 
        go correcting people. YES,👏 PEOPLE 👏 DO 👏 HAVE 👏 OPINIONS 👏, JUST 👏 DON'T 👏 FORCE 👏 IT 👏 ON 👏 THEM 👏. If you wish to suggest
        or give criticism, do it nicely. ACTUALLY 👏 TELL 👏 THEM 👏 ON 👏 WHAT 👏 THEY 👏 CAN 👏 IMPROVE 👏 ON 👏, don't just tell them
        'Oh, you're bad'. There's a fine line between constructive criticism and criticism. Please don't insult
        people because they didn't draw certain characters the same as the movie. Thank you 😇✨ " 
    postDate="February 3, 2022 - 2:24 PM"
></PostComp>

<br>
<br>

<PostComp 
    postTitle="Some stuff I'd like to add" 
    postContent="Hey hey! This is just some notes for my-self and stuff I'd like to add to my smol page ✨.
        Stoof: Comment buttons, Database, Post buttons, Profiles, Names under profile pictures, Sign-In, 
        images in posts, taking back your likes//dislikes, updating thumbs up icons ( it's literally just
        emoji's right now LOL), more actions on the post ( hearts and other emotes??), Replies to comments,
        Follow button, Admin thingies ( So certain people are allowed to change things, moderate, delete things
        ,etc.), My social medias on the bottom, and possibly an about the creators ( of the website) page? 
        Hopefully, alot of these thoughts come true. I AM STILL JUST a beginner at programming, but I think 
        I've come far 😄 . I am a Minecraft skin creator if you didn't know. Something I'd really like to do
        is make myself a website where i can advertise my skins and sell them! It's not bad to want to make 
        some money out of your hobbies right 😏🤔? I tried to do the comment thing today, but
        haha... It didn't turn out so well-- I hope to get a hang of s v e l t e. Anywho, that's all. " 
    postDate="February 4, 2022 - 5:31 PM"
></PostComp>

<br>
<br>






