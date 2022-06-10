<script>
     import TiltedTitle from "$lib/janeudemy/TiltedTitle.svelte";
     import Link from "$lib/Link.svelte";
</script>
<style lang="scss">

    @mixin clearfix {
        &::after {
            content: "";
            display: table;
            clear: both;
        }
    }

    $gutter-vertical: 8rem;
	$gutter-horizontal: 6rem;
    $grid-width: 114rem;

    .row {
    max-width: $grid-width;
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: $gutter-vertical;

    }

    @include clearfix;

    [class^="col-"] {
        float: left;

        &:not(:last-child) {
            margin-right: $gutter-horizontal;
        }
    }

    .col-1-of-2 {
        width: calc((100% - #{$gutter-horizontal}) / 2);
    }

    .col-1-of-3 {
        width: calc((100% - 2 * #{$gutter-horizontal}) / 3);
    }

    .col-2-of-3 {
        width: calc( 2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal});
    }

    .col-1-of-4 {
        width: calc((100% - 3 * #{$gutter-horizontal}) / 4);
    }

    .col-2-of-4 {
        width: calc( 2 *((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal});
    }

    .col-3-of-4 {
        width: calc( 3 *((100% - 3 * #{$gutter-horizontal}) / 4) + 2 * #{$gutter-horizontal});
    }



 }

</style>

<div>
    
    <h1>Jane's Page</h1>
    <div class="root">
    
        <!--
        <section class="grid-test">
            <div class="row">
                <div class="col-1-of-2">
                    Col 1 of 2
                </div>
                <div class="col-1-of-2">
                    Col 1 of 2
                </div>
            </div>
    
            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>
            
            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-2-of-3">
                    Col 2 of 3
                </div>
            </div>
    
            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
            </div>
    
            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-2-of-4">
                    Col 2 of 4
                </div>
            </div>
    
            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-3-of-4">
                    Col 3 of 4
                </div>
            </div>
        </section>
        -->
                      
        <div class="row">
            <TiltedTitle title="Yeeting all day long"></TiltedTitle>
            <div class="col-1-of-2">
                <h3 class="heading-tertiary u-margin-bottom-small">Soon this will be a good website</h3>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                </p>

                <h3 class="heading-tertiary u-margin-bottom-small">I am text</h3>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit amet. Mattis ullamcorper velit sed ullamcorper. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Convallis tellus id interdum velit laoreet id.  
                </p>
                <Link title="Learn more &rarr;" />
            </div>
            <div class="col-1-of-2">
                Image composition
            </div>
        </div>
    </div>
</div>