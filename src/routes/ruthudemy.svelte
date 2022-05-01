<script>
    import Header from '$lib/ruthsudemy/Header.svelte';
    import MeetupItem from '$lib/ruthsudemy/MeetupItem.svelte';

    const meetups = [
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
            title: '😆 Jokes to make you laugh! 🤣',
            subtitle: '🤣 mabye you can make one of the jokes like i did JK hahahahahah! 😆',
            description: '😭 me my mom telled me that there was no more Ice Cream.🍨 the next day i saw all the kids eating Ice Cream without me!🍦 ME:',
            imageUrl: 'https://imgs.search.brave.com/Lpcf4XCsGQuJsqffHbMzZwL3_ovK54LRuXAVvNbGD_0/rs:fit:1200:1080:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsL2IvMS83Lzk2/MDcyMy13aWRlc2Ny/ZWVuLXRoZS1hbWF6/aW5nLXdvcmxkLW9m/LWd1bWJhbGwtd2Fs/bHBhcGVycy0xOTIw/eDEwODAtZm9yLWRl/c2t0b3AuanBn',
            address: '10th joke road 778901 New York',
            contactEmail: 'joke@test.com',
        },
    ];
        
            
           
            
    
</script>

<Header />

{#each meetups as meetup}
    <MeetupItem />
{/each}