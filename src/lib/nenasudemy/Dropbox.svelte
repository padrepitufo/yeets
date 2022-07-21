<script>
    import { onMount } from 'svelte';
	import { getYeeps, postYeets } from "$lib/yeets.js";

    let isLoading = false;
	let yeetAuthor = null;
	let yeeps = [];

    onMount(async () => {
        isLoading = true;
        const resYeeps = await getYeeps();
        yeeps = resYeeps;
        isLoading = false;
    });
</script>

<select name="Pick a User" bind:value={yeetAuthor}>
    {#each yeeps as user}
        <option value="{user.id}">{user.sign}</option>
    {/each}
</select>