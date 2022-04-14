<!-- ACTUALLY FOLLOWING UDEMY STUFF -->


<script>
  import Hederr from "$lib/udemy/Hederr.svelte";
  import MeatUpGrid from "$lib/udemy/MeatUpGrid.svelte";

  const meatups = [
	{
		id:'m1',
		title:'Coding Bootcamp',
		subtitle:'Learn to code in 5 boring hours!',
		description:'In this MeatUp, our best, but boring, experts will be teaching the basics of code!',
		imageUrl:'https://i.pinimg.com/originals/1f/5a/2a/1f5a2ae53ad9cc5c4051d34b79b12321.jpg',
		address:'69th Geek Road, 21210 Your Moms House ',
		contactEmail:'XxcodergeekxX1277@test.com',
	},
	{
		id:'m2',
		title:'Swim Together',
		subtitle:'Let\'s go for some swimming!',
		description:'We will be teaching how to swim, and some fun games! No drowning allowed!!',
		imageUrl:'https://i.pinimg.com/564x/df/8f/27/df8f2774d1ec45a0c2ff43647103e947.jpg',
		address:'96th Slippy Sea, 12345 Artic Ocean',
		contactEmail:'AquaMansMothersHusbandsWife@test.com',
	}
  ];

</script>

<style>
	body {
		color: #333;
		margin: 0;
		padding: 8px;
		box-sizing: border-box;
	}
 
	a {
		color: rgb(0,100,200);
		text-decoration: none;
	}
q
	a:hover {
		text-decoration: underline;
	}

	a:visited {
		color: rgb(0,80,160);
	}

	label {
		display: block;
	}

	input, button, select, textarea {
		font-family: 'Lato', sans-serif;
		font-size: inherit;
		-webkit-padding: 0.4em 0;
		padding: 0.4em;
		margin: 0 0 0.5em 0;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 2px;
	}

	input:disabled {
		color: #ccc;
	}

	button {
		color: #333;
		background-color: #f4f4f4;
		outline: none;
	}

	button:disabled {
		color: #999;
	}

	button:not(:disabled):active {
		background-color: #ddd;
	}

	button:focus {
		border-color: #666;
	}
	main {
		margin-top: 5rem;
	}
</style>

<Hederr></Hederr>

<main>
	<form>
		<div class="form-control">
			<label for="title">Title</label>
			<input type="text" id="title">
		</div>
		<div class="form-control">
			<label for="subtitle">Subtitle</label>
			<input type="text" id="subtitle">
		</div>
		<div class="form-control">
			<label for="address">Address</label>
			<input type="text" id="address">
		</div>
		<div class="form-control">
			<label for="email">E-Mail</label>
			<input type="email" id="email">
		</div>
		<div class="form-control">
			<label for="imageURL">Image URL</label>
			<input type="text" id="imageURL">
		</div>
		<div class="form-control">
			<label for="description">Description</label>
			<textarea rows="3" id="description"/>
		</div>
	</form>
	<MeatUpGrid meatups={meatups}></MeatUpGrid>
</main>

