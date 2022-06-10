<script>
    export let title;

</script>
<style lang="scss">
    $color-primary-light: #7ed56f;
    $color-primary-dark: #28b485;
    $color-black: #000;
    .u-center-text { text-align: center; }

    .u-margin-bottom-small { margin-bottom: 1.5rem; }
    .u-margin-bottom-medium { margin-bottom: 4rem; }
    .u-margin-bottom-big { margin-bottom: 8rem; }

    .heading-secondary {
        font-size: 3.5rem;
        text-transform: uppercase;
        font-weight: 700;
        display: inline-block;
        background-image: linear-gradient(to right,$color-primary-light, $color-primary-dark);
        -webkit-background-clip: text;
        color: transparent;
        letter-spacing: .2rem;
        transition: all .2s;
    
        &:hover {
            transform: skewY(2deg) skewX(15deg) scale(1.1);
            text-shadow: .5rem 1rem 2rem rgba($color-black, .2);
        }
    }
</style>
<div class="u-center-text u-margin-bottom-big">
    <h2 class="heading-secondary">
        {title} 
    </h2>
</div>