<script>
  export let title;
  export let subtitle;
  export let imageUrl;
  export let description;
  export let address;
  export let email;
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Lato|Roboto+Slab');
  @import url('https://fonts.googleapis.com/css2?family=Anek+Tamil:wdth,wght@87.1,400;100,300&family=Hind+Siliguri&display=swap');
  article {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      border-radius: 5px;
      background: white;
      margin: 1rem;
    }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }

  h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-family: 'Anek Tamil', sans-serif;
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
    font-family: 'Anek Tamil', sans-serif;
  }

  div {
    text-align: right;
  }
  button {
    font-family: "Roboto Slab", sans-serif;
    background-color: #cf0056;
    border-style: solid;
    border-radius: 11px;
    border-color: #5ee1eb;
    color: rgb(255, 255, 255);
		outline: none;

  }

  </style>

<!-- Card thing o//o -->

<article>
    <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>  
        <p>{address}</p>
    </header>
    <div class="image">
        <img src="{imageUrl}" alt="{title}">
    </div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <a href="mailto:{email}">Contact Us</a>
        <button>Show Details</button>
        <button>Favorite</button>
    </footer>
</article>