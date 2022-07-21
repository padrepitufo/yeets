<script>
    export let title;
    export let url = "#";
</script>

<style lang="scss">
    $color-primary:#55c57a;
    $color-white: white;
    $color-black: #000;
    $default-font-size: 1.6rem;

    .btn-text {
        &:link,
        &:visited {
            font-size: $default-font-size;
            color: $color-primary;
            display: inline-block;
            text-decoration: none;
            border-bottom: 1px solid $color-primary;
            padding: 3px;
            transition: all .2s;
        }

        &:hover {
            background-color: $color-primary;
            color: $color-white;
            box-shadow: 0 1rem 2rem rgba($color-black, .15);
            transform: translateY(-2px);
        }

        &:active {
        box-shadow: 0 .5rem 1rem rgba($color-black, .15);
            transform: translateY(0);
        }
    }   
</style>

<a href={url} class="btn-text">{title}</a>




