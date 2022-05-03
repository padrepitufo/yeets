<style lang="scss">

    $gutter-vertical: 8rem;
	$gutter-horizontal: 6rem;
    $grid-width: 114rem;

    .row {
    max-width: $grid-width;
    background-color: #eee;
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: $gutter-vertical;

    }

    .col-1-of-2 {
        width: calc((100% - #{$gutter-horizontal}) / 2);
        background-color: orangered;
        float: left;

        &:not(:last-child) {
            margin-right: $gutter-horizontal;
        }
    }

 }

</style>

<div>
    
    <h1>Jane's Page</h1>
    <div class="root">
    

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
    
    
    
    </div>
</div>