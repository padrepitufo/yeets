<!-- ACTUALLY FOLLOWING UDEMY STUFF -->


<script>
	import Hederr from "$lib/nenasudemy/Hederr.svelte";
	import MeatUpGrid from "$lib/nenasudemy/MeatUpGrid.svelte";
	// import TextInput from "$lib/nenasudemy/TextInput.svelte";
	import Button from "$lib/nenasudemy/Button.svelte";
	import EditNewMeatup from "$lib/nenasudemy/EditNewMeatup.svelte";
		
	let editMode = null;
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
	function addMeatup (event) {
		const newMeatup = {
			id: Math.random().toString(),
			title: event.detail.title,
			subtitle: event.detail.subtitle,
			description: event.detail.description,
			imageUrl: event.detail.imageUrl,
			contactEmail: event.detail.email,
			address: event.detail.address
		};
			meatups = [newMeatup,...meatups];
			editMode = null;
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
	function cancelEdit() {
		editMode = null;
	}
</script>

<style>
	main {
		margin-top: 5rem;
	}
	.meatups-controls {
		margin: 1rem;
	}
</style>

		<Hederr></Hederr>

		<main>
			<div class="meatups-controls">
				<Button on:click="{() => (editMode = 'add')}">Add Meatup</Button>
			</div>
			{#if editMode === 'add'}
				<EditNewMeatup on:save={addMeatup} on:cancel={cancelEdit} />
			{/if}
			<MeatUpGrid {meatups} on:togglefavorite={toggleFavorite} />
		</main> 