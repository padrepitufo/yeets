<script>
    import Header from '$lib/ruthsudemy/Header.svelte';
    import MeetupGrid from '$lib/components/MeetupGrid.svelte';
    import TextInput from '$lib/components/TextInput.svelte';

    let title = '';
    let subtitle = '';
    let address = '';
    let email = '';
    let description = '';
    let imgUrl = '';

    let meetups = [
        {
            id: 'm1',
            title: 'Coding on a Computer 💻',
            subtitle: 'Learn to code in 4 Wonderful Hours ⏳',
            description: 'Hi In this MeetUs we want to TEACH little kids to code and have A wonDerful LIFE! 💬',
            imageUrl: 'https://imgs.search.brave.com/T-8VuORPLOZzs3HVEGom-ZUTq3bxfaVOl6orAZ3TJp8/rs:fit:1200:1080:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9CaW5hcnkt/Q29kZS1CYWNrZ3Jv/dW5kLWZvci1EZXNr/dG9wLmpwZw',
            address: '27th Code Road, 32523 New York',
            contactEmail: 'wonderWorld@test.com'
        },
        {
            id: 'm2',
            title: 'Fire 🤤',
            subtitle: 'dO yOu LiKe FiRe 🤤',
            description: 'hmm.. oh did not see you there enjoy this fire with me please 🥱',
            imageUrl: 'https://imgs.search.brave.com/GHEBXPKUZK-9J0AuVimuEpOF9J1HD7w7l7qw1sl9wck/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZW1lcmdlbmN5LnBp/dHQuZWR1L3NpdGVz/L2RlZmF1bHQvZmls/ZXMvYmxvY2staW1n/L2ZpcmUuanBn',
            address: 'FireRoad 32523 New York',
            contactEmail: 'FireTime@test.com',
        },
    ];
        
            
           
            
    function addMeetup() {
        const newMeetup = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            description: description,
            imgUrl: imgUrl,
            contactEmail: email,
            address: address
        };

        // meetups.push(newMeetup); // DOSE NOT WORK!
        meetups = [newMeetup, ...meetups];
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault="{addMeetup}">
       <TextInput 
       id="title" 
       label="Title" 
       type="text"
       value={title}
       on:input="{event => (title = event.target.value)}" />
       <TextInput 
       id="subtitle" 
       label="Subtitle" 
       type="text"
       value={subtitle}
       on:input="{event => (subtitle = event.target.value)}" />
       <TextInput 
       id="address" 
       label="Address" 
       type="text"
       value={address}
       on:input="{event => (address = event.target.value)}" />
       <TextInput 
       id="imgUrl" 
       label="ImgUrl" 
       type="text"
       value={imgUrl}
       on:input="{event => (imgUrl = event.target.value)}" />
       <TextInput 
       id="email" 
       label="E-mail" 
       type="email"
       value={email}
       on:input="{event => (email = event.target.value)}" />
       <TextInput 
       id="description" 
       label="Description" 
       controlType="textarea"
       value={description}
       on:input="{event => (description = event.target.value)}" />
           <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={title} />
        </div>
        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" bind:value={subtitle} />
        </div>
        <div class="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={address} />
        </div>
        <div class="form-control">
            <label for="imgUrl">Image Url</label>
            <input type="text" id="imgUrl" bind:value={imgUrl} />
        </div>
        <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="email" id="email" bind:value={email} />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" bind:value={description} />
        </div>
        <button type="submit" Save></button>
    </form>
    <MeetupGrid {meetups} />
</main>
