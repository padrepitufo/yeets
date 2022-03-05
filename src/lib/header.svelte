<script>
    export let image_url;
</script>

<header> 
    <nav>
        <ul>
            <li><a href="/">Yeets</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/nena">nena</a></li>
            <li><a href="/ruth">Ruth</a></li>
            <li><a href="/luke">luke</a></li>
            <li><a href="/nenasudemy">nenados?O:</a></li>
        </ul>
    </nav>
</header> 
<div class="root">
    <header class="header" style="--image: url('{image_url}');">
        <div class="header__logo-box">
            <img src="/img/logo-white.png" alt="logo" class="header__logo">
        </div>
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Welcome</span>
                <span class="heading-primary--sub">to rama lakeline</span>
            </h1> 
            <a href="/nena" class="btn btn--white btn--animated">Discover our tours</a>
        </div>
    </header> 
</div>
<style>
    /*
    COLORS:

    Light green: #7ed56f
    Medium green: #55c5ya
    Dark green: #28b485

    */
    /* --color-primary: #55c57a; */
    /* --color-primary-light: #7ed56f; */
    /* --color-primary-dark: #28b485; */
    /* $color-grey-dark: #777 */
    :root {
        --color-primary-dark: #28b485;              
    }    
    :root {
        --color-primary-light: #040938;
    }
    :root {
        --color-primary:  #040333;
    }
    :root {
        --color-grey-dark: #777;
    }
    :root {
        --color-white: #fff;
    }
    :root {
        --color-black: #000;
    }
    
    *,
    *::after,
    *::before {
    margin: 60;
    padding: 0;
    box-sizing: inherit;
    } 


    .root {
        font-family: "lato", sans-serif;
        font-weight: 400;
        /* font-size: 16px; */
        line-height: 1.7;
        color: var(--color-grey-dark);
        padding: 3rem;

        box-sizing: border-box;
    }

    .header {
        height: 95vh;
        background-image: linear-gradient(
            to right bottom,
            var(--color-primary-light),
            var(--color-primary-dark)), 
        var(--image);
        background-size: cover;
        background-position: top;
        position: relative;

        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    } 
 
    .header__logo-box {
        position: absolute;
        top: 4rem;
        left: 4rem;
    }

    .header__logo {
        height: 3.5rem;
    }

    .header__text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .heading-primary {
        color: var(--color-white);
        text-transform: uppercase;

        backface-visibility: hidden;
        margin-bottom: 6rem ;

    }

    .heading-primary--main {
        display: block;
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3.5rem;

        animation-name: moveInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-out;

        
        /*
        animation-delay: 3s;
        animation-iteration-count: 3;
        */

    }

    .heading-primary--sub {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.75rem;
        animation: moveInRight 1s ease-in-out;
    }

    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateX(-10rem);
        }

        80% {
            transform: translateX(1rem);
        }

        100% {
            opacity: 1;
            transform: translate(0);
        }
    }

    @keyframes moveInRight {
        0% {
            opacity: 0;
            transform: translateX(10rem);
        }

        80% {
            transform: translateX(-1rem);
        }

        100% {
            opacity: 1;
            transform: translate(0);
        }
    }

    @keyframes moveInBottom {
        0% {
            opacity: 0;
            transform: translateY(3rem);
        }

        100% {
            opacity: 1;
            transform: translate(0);
        }
    }

    .btn:link,
    .btn:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: 1.6rem;
    }

    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0,0,02);
    }

    .btn:active{
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(0,0,02);
    }

    .btn--white {
        background-color: var(--color-white);
        color: var(--color-grey-dark);
    }

    .btn::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;

    }

    .btn--white::after {
        background-color: var(--color-white);
    }

    .btn:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }

    .btn--animated {
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode: backwards;
    } 
</style>
