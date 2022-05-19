<script>
    import Hedar from "$lib/LukesMeetups/Hedar.svelte";  
    import MeetupGrid from "$lib/LukesMeetups/MeetupGrid.svelte";
    import TextInput from "$lib/LukesMeetups/TextInput.svelte";
    import Button from "$lib/LukesMeetups/Button.svelte";
    import EditMeetup from "$lib/LukesMeetups/EditMeetup.svelte";
   

        let meetups = [
            {
                id: "m1",
                title: "Coding Bootcamp",
                subtitle: "Learn to code in about 2 hours",
                description: "In this meetup, we will have some experts that teach you how to code! ",
                imageUrl: "https://imgs.search.brave.com/k4O1u07QUwKWvJK_hsjhgjf0Iv9L2dDxYvW8_4sVlBE/rs:fit:1200:840:1/g:ce/aHR0cHM6Ly93d3cu/amFtZXNnbWFydGlu/LmNlbnRlci93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wOS9G/b3RvbGlhXzE2OTUz/OTc5M19TdWJzY3Jp/cHRpb25fTW9udGhs/eV9NLTEyMDB4ODQw/LmpwZw",
                address: "29th Apple Road, 41579 New York",
                contactEmail: "code@test.com",
                isFavorite: false
            },
            {
                id:"m2",
                title: "Swim Together" ,
                subtitle: "Let's go for some swimming",
                description: "We will simply swim some rounds!",
                imageUrl: "https://imgs.search.brave.com/EsnvgGzmUdFlHTPblAds6ssLCsIEsG6BJYM8VR9sgEU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bGl0dGxlZm9yZXN0/cGhvdG9ncmFwaHku/Y29tLmF1L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAxLzA4/LTI2ODYtcG9zdC8y/MDE3LTAxLTA4XzAw/MDUuanBn",
                address: "30th Cherry Road, 54675 North Carolina",
                contactEmail: "swim@test.com",
            }
        ];

            let editMode;

        let paragraphClass = 'water';
        const changer = () => {
            if (paragraphClass == 'water') {
                paragraphClass = 'fire';
            }else{
                paragraphClass = 'water';
            }
        }
      function addMeetup(event) {
          const newMeetup = {
            id: Math.random().toString(),
            title: event.detail.title,
            subtitle: event.detail.subtitle,
            description: event.detail.description,
            imageUrl: event.detail.imageUrl,
            contactEmail: event.detail.email,
            address: event.detail.address
          };
         // meetups.push(newMeetup); // DOES NOT WORK!
         meetups= [newMeetup, ...meetups];
         editMode = null;
      }

      function cancelEdit() {
          editMode = null;
      }

      function toggleFavorite(event) {
        const id = event.detail;
        const updatedMeetup = {...meetups.find(m => m.id === id) };
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        const meetupIndex = meetups.findIndex(m => m.id === id);
        const updatedMeetups = [...meetups];
        updatedMeetups[meetupIndex] = updatedMeetup;
        meetups = updatedMeetups;
      }
    </script>
    <style>
        main {
            margin-top: 5rem;
        }

        .meetups-controls {
            margin: 1rem;
        }
        
        h2 {
            color: orange
        }
        h3 {
            color: rgba(255, 255, 0, 0.856)
        }
        h4 {
            color: green
        }
        h5 {
            color: blue
        }
        h6 {
            color: purple
        }
        .heading{
            font-size:20px;
        }
        .water {
            color: blue;
        }
        .fire {
            color: red;
        }
        .appleh1 {
            color:red;
        }
    </style>
    
    <Hedar/>
    
    <main>
        <div class="meetup-controls">
            <Button  on:click="{() => editMode = 'add'}">New Meetup</Button>
        </div>
       
            {#if editMode === 'add'}
        <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
        {/if}
        <MeetupGrid {meetups} on:togglefavorite="{toggleFavorite}" />
    </main>
    
    <h1>Luke's space</h1>
    <h3>January 29</h3>
    <p>
        My thoughts about Minecraft.
    Minecraft I would say it's fun because you have infinite possibilties.
    You can create anything, Like cars, trains, houses, and boats.
    and there is 4 gamemodes you can try! Now I will write them in a list.
    </p>
    <ul>
        <li>Creative</li>
        <li>Survival</li>
        <li>Hardcore</li>
        <li>Adveture</li>
    </ul>
    <p on:click="{changer}" class="{paragraphClass}">Now i will explain all the gamemodes, Creative has infinite possibilties to try.
        Survival is about surviving and trying not to die.
        But if you do you can always respawn! Hardcore is like survival
        but do not die! Because if you do you can not respawn.
        But you can spectate your world or delete it.
        Adventure is like all about adventuring.
        but you can't break blocks or place blocks. 
        So now I explained all the gamemodes. Also you can play servers on Minecraft.
        Like Hypixel, CubeCraft, ManaCube and many more. On the servers you can play with
        friends or family members. Theres also food in Minecraft like Cooked Steak, 
        Cooked Porkchop, Cooked Mutton, Cooked Rabbit, Cooked Salmon, Cooked Fish,
        Raw Beef, Raw Porkchop, Raw Mutton, Raw Rabbit, Raw Fish, Raw Salmon, Raw Chicken,
        Baked Potato, Apple, Chorus Fruit, Carrot, Melon Slice, Raw Potato, Beetroot,
        Cake, Rabbit Stew, Pumpkin Pie, Poisonous Potato, Mushroom Stew, Beetroot Stew,
        Golden Carrot, Bread, Cookie, Golden Apple, And the Enchanted Golden Apple.
        Now there is also 4 editions of minecraft first java edition the default edition
        then bedrock the realistic edition then pocket edition for phones and ipads
        then finally Education edition used by schools. Also you can add mods to Minecraft.
        Now I will add four reasons that Minecraft is a fun game to play in a list.
    </p>
    <ul>
        <li>It's fun</li>
        <li>You can play with others</li>
        <li>You can have creativity</li>
        <li>You can really enjoy it!</li>
    </ul> 
    <img src="https://img.search.brave.com/tuKSpAdrRKpfwnROuMPJX64I8EwxhphkmIK8MJoLngk/rs:fit:1024:683:1/g:ce/aHR0cHM6Ly93d3cu/Z2FtZWRldmlkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wMS9wb3JfcXVl/X29fbWluZWNhcmZ0/X2Zhel90YW50b19z/dWNlc3NvLjAtMTAy/NHg2ODMuanBn" alt="">
    <p>Today I memorized the seven continents and the four oceans. I can tell you all the continents and the oceans in a list.</p>
    <ul>
        <li>South America</li>
        <li>North America</li>
        <li>Europe</li>
        <li>Africa</li>
        <li>Asia</li>
        <li>Antartica</li>
        <li>Australia</li>
    </ul>
    <p>Now all the oceans.</p>
    <ul>
        <li>Indian Ocean</li>
        <li>Pacific Ocean</li>
        <li>Artic Ocean</li>
        <li>Atlantic Ocean</li>
    </ul>
    <p>Well I have now told you all the oceans and the continents. Tomorrow I will tell
        more about my day.
    </p>
    <ul>
    <li>Posted on: January 31 at 3:46 pm</li>
    </ul>
    <p>Hey it's me again well I did tell you I was gonna come back soooo here I am!
        so like basically this is like my diary... because my dad told me it was my diary so it's like weird that a boy has a diary... so today I got a backpack to store all my school stuff. well today I have to add some more stuff everyday which is kinda fun I guess.
        Well today my big sister is learning japanese and my little sister is learning about spanish I know a little spanish just not much well I guess this all im gonna right today.
        Tomorrow I will add on more then more then more each day and that deserves a YAY!!!
        well now I am done. Psst... play Minecraft.
    </p>
    <ul>
        <li>Posted on: Febuary 1st at 3:09 pm</li>
    </ul>
    <img src="https://img.search.brave.com/IFBa_4TnOAW-fdXe0ZFqy-E2z1a1CRuib23OjeE3Rs4/rs:fit:1200:628:1/g:ce/aHR0cHM6Ly9jZG4u/dm94LWNkbi5jb20v/dGh1bWJvci9lWFdY/dFlrYnRMTlYzTWIw/aHVzRzZXOFRjZDA9/LzB4MDoxOTIweDEw/MDUvZml0LWluLzEy/MDB4NjMwL2Nkbi52/b3gtY2RuLmNvbS91/cGxvYWRzL2Nob3J1/c19hc3NldC9maWxl/LzE5MzU1NTU1L2pi/YXJlaGFtXzE5MTE1/OF9wbHkwOTU4X2Rl/Y2FkZV9taW5lY3Jh/ZnQuanBn" alt="">
    <p>Hello today I will explain my day again... well today there was a power outage when 
        I was sleeping I woke up around 5 am and cleaned my room so I can play Minecraft.
        also Minecraft always updates their game and everthing else! Theres always new 
        stuff in all the updates. Well also today it SNOWED!!! a little but not much
        but it was good enough so like right now I think im going to play in it so I
        guess thats fun. well I think I said enough for today well I got to get going
        goodbye. Psst... I'm gonna add a Minecraft snow image.
    </p>
    <img src="https://img.search.brave.com/mmugVsOGy8s25i5H1TKcV00_JqMJDKGVSZd5clZyy7c/rs:fit:700:394:1/g:ce/aHR0cHM6Ly9teS5t/Y3BlZGwuY29tL3N0/b3JhZ2UvYWRkb25z/LzIwNDIvaW1hZ2Vz/L2luZmluaXRlLXNu/b3ctd29ybGQtYWRk/b24tMTE0XzcucG5n" alt="">
    <ul>
        <li>Posted on: Febuary 3rd at 11:15 am </li>
    </ul>
    <p>Hello everyone today i'm going to write in rainbow so lets get to it, I'm gonna right all of my favorite fruit</p>
    <h1 class="appleh1">Apples</h1>
    <h2>Oranges</h2>
    <h3>Bananas</h3>
    <h4>Kiwi</h4>
    <h5>Blue berries</h5>
    <h6>Grapes</h6>
