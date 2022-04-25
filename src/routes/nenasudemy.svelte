<!-- ACTUALLY FOLLOWING UDEMY STUFF -->


<script>
	//   import { postYeets } from "$lib/yeets.js";
	import Hederr from "$lib/nenasudemy/Hederr.svelte";
	import MeatUpGrid from "$lib/nenasudemy/MeatUpGrid.svelte";
	import TextInput from "$lib/nenasudemy/TextInput.svelte";
	import Button from "$lib/nenasudemy/Button.svelte";
	  
	let title = '';
	let subtitle = '';
	let address = '';
	let description = '';
	let email = '';
	let imageUrl = '';
	let meatups = [
		{
			id:'m1',
			title:'Coding Bootcamp',
			subtitle:'Learn to code in 5 boring hours!',
			description:'In this MeatUp, our best, but boring, experts will be teaching the basics of code!',
			imageUrl:'https://i.pinimg.com/originals/1f/5a/2a/1f5a2ae53ad9cc5c4051d34b79b12321.jpg',
			address:'69th Geek Road, 21210 Your Moms House ',
			contactEmail:'XxcodergeekxX1277@test.com',
			isFavorite:false,
		},
		{
			id:'m2',
			title:'Swim Together',
			subtitle:'Let\'s go for some swimming!',
			description:'We will be teaching how to swim, and some fun games! No drowning allowed!!',
			imageUrl:'https://i.pinimg.com/564x/df/8f/27/df8f2774d1ec45a0c2ff43647103e947.jpg',
			address:'96th Slippy Sea, 12345 Artic Ocean',
			contactEmail:'AquaMansMothersHusbandsWife@test.com',
			isFavorite:false,
		}
	  ];
		// const addMeatup = async () => {
		//     const resYeets = await postYeets(title, description);
		//     console.log(resYeets);
	function addMeatup () {
		const newMeatup = {
			id: Math.random().toString(),
			title: title,
			subtitle: subtitle,
			description: description,
			imageUrl: imageUrl,
			contactEmail: email,
			address: address
		};
			// meatups.push(newMeatup); // DOES NOT WORK!
			meatups = [newMeatup,...meatups];
	};

	function toggleFavorite(event) {
		const id = event.detail;
		const updatedMeatup = { ...meatups.find(m => m.id === id) };

		updatedMeatup.isFavorite = !updatedMeatup.isFavorite;
		const meatupIndex = meatups.findIndex(m => m.id === id);
		const updatedMeatups = [...meatups];
		updatedMeatups[meatupIndex] = updatedMeatup;
		meatups = updatedMeatups;

	}
	</script>
	
	<style>
		main {
			margin-top: 5rem;
		}
		form {
			width: 30 rem;
			max-width:90%;
			margin:auto;
		}
	</style>

	<Hederr></Hederr>

	<main>
		<form on:submit|preventDefault="{addMeatup}">
		<TextInput 
			id="title" 
			label="Title" 
			value={title} 
			on:input={event => (title = event.target.value)} />
		<TextInput 
			id="subtitle" 
			label="Subtitle" 
			value={subtitle} 
			on:input={event => (subtitle = event.target.value)} />
		<TextInput 
			id="address" 
			label="Address" 
			value={address} 
			on:input={event => (address = event.target.value)} />
		<TextInput 
			id="imageUrl" 
			label="Image URL" 
			value={imageUrl} 
			on:input={event => (imageUrl = event.target.value)} />
		<TextInput 
			id="email" 
			label="E-Mail" 
			value={email} 
			type="email"
			on:input={event => (email = event.target.value)} />
		<TextInput 
			id="description" 
			label="Description" 
			value={description} 
			controlType="textarea"
			rows="3"
			on:input={event => (description = event.target.value)} />
			<Button type="submit" caption="Save"/>
		</form>
		<MeatUpGrid {meatups} on:togglefavorite="{toggleFavorite}" />
	</main>