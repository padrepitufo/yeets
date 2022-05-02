<!-- put on pausu -->

<style>

@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
input,
textarea {
  display: block;
  width: 100%;
  font-family: 'Merriweather', serif;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 3px 3px 0 0;
  background: white;
  padding: 0.15rem 0.25rem;
  transition: border-color 0.1s ease-out;
}

input:focus,
textarea:focus {
  border-color: #e40763;
  outline: none;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
}

.form-control {
  padding: 0.5rem 0;
  width: 60%;
  margin: 0.25rem 0;
}

label {
  font-size: 30px;
}
</style>

<script>
    export let controlType = null;
    export let id;
    export let label;
    export let rows = null;
    export let value;
    export let type = "text";

</script>


<div class="form-control">
    <label for="{id}">{label}</label>
    {#if controlType === 'textarea'}
        <textarea rows="{rows}" id="{id}" value={value} on:input/>
    {:else}
        <input type="{type}" id="{id}" value={value} on:input/>
    {/if}
</div>  