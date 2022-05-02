<!-- put on pausu -->

<style>
    button,
    a {
        font: inherit;
        font-family: "Roboto Slab", sans-serif;
        border: 1px solid #cf0056;
        background: #cf0056;
        padding: 0.5rem 1rem;
        color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
        cursor: pointer;
        text-decoration: none;
        outline: none;
    }

    button:focus {
        outline: none;
    }

    button:hover,
    button:active,
    a:hover,
    a:active {
        background: #ff3f4f;
        border-color: #ff3f4f;
        box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active {
        background: #ccc;
        border-color: #ccc;
        color: #959595;
        box-shadow: none;
        cursor: not-allowed;
    }

    .success {
        background: #01a129;
        border-color: #01a129;
    }

    .success:hover,
    .success:active {
        background: #1ac745;
        border-color: #1a26c7;
    }

    .outline {
        background: transparent;
        color: #cf0056;
        box-shadow: none;
    }

    .outline:hover,
    .outline:active {
        background: rgb(255, 222, 212);
        box-shadow: none;
    }

    .outline:disabled,
    .outline:disabled:hover,
    .outline:disabled:active {
        background: transparent;
        color: #ccc;
    }

    .outline.success {
        border-color: #01a129;
        color: #01a129;
    }

    .outline.success:hover,
    .outline.success:active {
        background: #e6ffc4;
    }
</style>

<script>
    export let type = "button";
    export let href = null;
    export let mode = null;
    export let color = null;

</script>
{#if href}
    <a {href}>
        <slot></slot>
    </a>
{:else}
    <button class="{mode} {color}" {type} on:click>
        <slot></slot>
    </button>
{/if}