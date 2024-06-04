<script>
    import Header from '$lib/ruthudemy/Header.svelte';
    import MeetupGrid from '$lib/ruthudemy/MeetupGrid.svelte';
    import TextInput from '$lib/ruthudemy/TextInput.svelte';
    import Button from '$lib/ruthudemy/Button.svelte';
    

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
            title: 'Dog Street',
            subtitle: 'Walking Dogs',
            description: 'Get A Job! HURRY UP!',
            imageUrl: 'https://imgs.search.brave.com/1CyA6z5t1b4btwcaN5VWsKGtBmmtJ8--wImZfXwas1M/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS9fTERGOXo0Wnpa/SG8vVFFBSlEwWWRf/QUkvQUFBQUFBQUFB/STAvNlpIb3RRTVVm/bWsvczE2MDAvMTYw/MERPR185MDA2Lmpw/Zw',
            address: 'DogStreet 32523',
            contactEmail: 'Dog@test.com',
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
       id="description" dasf
       label="Description" 
       controlType="textarea"
       value={description}
       on:input="{event => (description = event.target.value)}" />
        <Button type="submit" caption="Save" />
    </form>
    <MeetupGrid {meetups} />
</main>
