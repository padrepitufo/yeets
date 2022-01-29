<!-- <header>
    <nav>
        <ul>
            <li><a href="/">Yeets</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/nena">nena</a></li>
        </ul>
    </nav>
</header>  -->
<div class="root">
    <header class="header">
        <div class="logo-box">
            <img src="./logo-white.png" alt="logo" class="logo">
        </div>
        <h1 class="heading-primary">
            <span class="heading-primary-main">Welcome</span>
            <span class="heading-primary-sub">to rama lakeline</span>
        </h1>
        
    </header> 
</div>



<style>


 /*
 COLORS:

 Light green: #7ed56f
 Medium green: #55c5ya
 Dark green: #28b485

 */

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 } 

  .root {
     font-family: sans-serif;
     font-weight: 400;
     font-size: 16px;
     line-height: 1.7;
     color: #777;
     padding: 30px;
 }

 .header {
     height: 95vh;
     background-image: linear-gradient(
     to right bottom,
     #7ed56fc5,
     #28b485d0), 
     url(./hero.jpg);
     background-size: cover;
     background-position: top;

     clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
 }   

 .heading-primary {
     color: #fff;
     text-transform: uppercase;

 }

 .heading-primary-main {
     display: block;
     font-size: 60px;
     font-weight: 400;
     letter-spacing: 35px;

}

 .heading-primary-sub {
      display: block;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 17.4px;
}
</style>