<script>

    export let val;

    export function empty() {
        val='';
    }
</script>

<style></style>

<input type="text" bind:value={val}>