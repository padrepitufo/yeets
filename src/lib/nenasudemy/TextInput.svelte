
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
    font-size: 30px;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 60%;
    margin: 0.25rem 0;
  }

  .invalid {
    border-color: rgb(255, 92, 92) ;
    background: #fde3e3;
  }

  .error-message {
      color: rgb(255, 92, 92) ;
      margin: 0.25rem 0;
  }

</style>

<script>
  export let type = "text";
  export let controlType = null;
  export let id;
  export let label;
  export let rows = null;
  export let value;
  export let valid = true;
  export let validityMessage = '';

  let touched = false;

</script>


<div class="form-control">
    <label for="{id}">{label}</label>
    {#if controlType === 'textarea'}
        <textarea class:invalid="{!valid && touched}" {rows} {id} bind:value={value} on:input on:blur={() => touched = true}/>
    {:else}
        <input class:invalid="{!valid && touched}" {type} {id} {value} on:input on:blur={() => touched = true}/>
    {/if}
    {#if validityMessage && !valid && touched}
      <p class="error-message">{validityMessage}</p>
    {/if}
</div>  