<!-- ACTUALLY FOLLOWING UDEMY STUFF -->

<script>
	import CustomInput from "$lib/nenasudemy/CustomInput.svelte";
	import Toggle from '$lib/nenasudemy/Toggle.svelte';

	let val = "Finna Beanna Bobinna";
	let selectedOption = 1;
	let price = 0;
	let agreed;
//   let favColor = 'red';
	let favColor = ['red'];
	let singleFavColor = 'blue';
	let usernameInput;
	let someDiv;
	let customInp;
	let enteredEmail = '';
	let formIsValid = false;

	customInp.empty();

	$: if (enteredEmail.includes("@")) {
		formIsValid = true;
	} else {
		formIsValid = false;
	}

	$: console.log(val);
	$: console.log(selectedOption);
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(favColor);
	$: console.log(singleFavColor);
	$: console.log(customInp);

	function setValue(event) {
		val = event.target.value;
	}
<<<<<<< HEAD

	function saveData() {
		// console.log(document.querySelector('#username').value);
		console.log(usernameInput.value);
		console.dir(usernameInput);
		console.dir(someDiv);
		customInp.empty();
	}
</script>

<!-- <input type="text" value={val} on:input={setValue}> -->
<!-- <input type="text" bind:value={val} /> -->

<CustomInput bind:val={val} bind:this={customInp}/>

<Toggle bind:chosenOption={selectedOption} />

<input 
	type="number" 
	bind:value={price}>


<label>
	<input type="checkbox" bind:checked={agreed}>
	Agree to terms?
</label>

<h1>Favorite color(s)?</h1>

<label>
	<input type="checkbox" name="color" value="green" bind:group={favColor}>
	Green
</label>

<label>
	<input type="checkbox" name="color" value="red" bind:group={favColor}>
	Red
</label>

<label>
	<input type="checkbox" name="color" value="blue" bind:group={favColor}>
	Blue
</label>



<select bind:value={singleFavColor}>
	<option value="green"></option>
	<option value="red"></option>
	<option value="blue"></option>
</select>

<hr>

<input type="text" bind:this={usernameInput}>
<button on:click={saveData}>Save</button>

<div bind:this={someDiv}></div>

<form on:submit|preventDefault>

	<input type="email" bind:value={enteredEmail}>
	<button type="submit" disabled={!formIsValid}></button>

</form>

