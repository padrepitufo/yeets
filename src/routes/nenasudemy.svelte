<!-- ACTUALLY FOLLOWING UDEMY STUFF -->

<script>
    let name = 'Nena';
    let age = 0;

    function incrementAge() {
        age += 1;
    }
</script>

<style>



    @import url('https://fonts.googleapis.com/css?family=Lato|Roboto+Slab');

    * {
      box-sizing: border-box;
    }

    html,
    body {
        position: relative;
        width: 100%;
        height: 100%;
        font-family: 'Lato', sans-serif;
    }

    body {
        color: #333;
        margin: 0;
        padding: 2rem;
        background: #f3f3f3;
    }

    button {
        font: inherit;
        border: 1px solid #cf0056;
        background: #cf0056;
        padding: 0.5rem 1rem;
        color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
        cursor: pointer;
    }

    button:hover,
    button:active {
        background: #e40763;
        border-color: #e40763;
        box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
    }
    h1{
        color:cadetblue;
    }

</style>

<h1>Konnichiwa! Watashi wa {name}desu. {age}-saidesu! </h1>
<button on:click="{incrementAge}">Nenrei henko!</button>
