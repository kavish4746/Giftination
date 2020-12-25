<template>
  <div>

    <html>
    <head>
      <title>Fashion</title>
      <link rel="stylesheet" href="home.css" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <header>
        <header1></header1>
      </header>
       <section>
        <h1>Introduction</h1>
        <p>
         <span class="intro">GiftiNation </span> is a one-stop supermarket chain that aims to offer customers a wide range of home and personal products under one roof. Each store stocks home utility products - including  kitchenware,home appliances and more - available at competitive prices that our customers appreciate. Our core objective is to offer customers best products at best price.
        <br><br>
        </p>
    </section>
    <section>
    <h1> Our Mission </h1>
    <p>
      At <span class="intro">GiftiNation</span> , we make available wide range of products and categories that caters to the needs of every family. Our mission is to provide the best possible price for our customers, so that every single rupee they spend on shopping with us gives them more value for money.</P>
    </section>

  <section>
  <h1>We are Located at</h1>
  <p>
    <img src="../images/Ahmedabad.jpg" class="img1">
    <img src="../images/Surat.jpg" class="img1">
  </p>
  </section>

<footer1></footer1>

    </body>
    </html>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

@media only screen and (max-width: 1000px) {
 header .content {
   padding:1rem;
 }
 header .content .masthead-heading {
        font-size: 1em;
 }

}

section {
 max-width:60%;
 margin-left:auto;
 margin-right:auto;
 font-family: 'quicksand', sans-serif;
 text-align:justify;
  padding:30px;

}

h1 {
text-align:left;
color:#686868;
letter-spacing:0.1em;
font-weight:bold;
}

@media only screen and (max-width:1000px) {
  h1, p , li {
    text-align:center;
    list-style:none;
    padding:20px;
  }
}

p {
 text-indent:1em;
 color:#404040;
 line-height:1.3em;
 padding:20px;
 font-size:20px;
}

li {
 font-weight:bold;
 color:#66CCCC;
 letter-spacing:0.1em;
}


img{
  max-width:10em;
  height:150px;
  width:60%;
  }
section > .content> ul {
  list-style:none;
  text-align:center;

}

section> .content > ul > li {
  display:inline-block;
  margin-right:10%;
  margin-left:10%;
}

@media only screen and (max-width: 1000x) {
  section .content ul {
    text-align: center;
  }

  section .content ul li {
    display:initial;
    margin:0 auto;
  }
}
 .clone , .hack {
   font-size: 1em;
 }

 img
 {
   width:100%;
   height:120px;
   padding:10px;
 }
.intro{
  font-family: 'Dancing Script', cursive;
    font-size: 1em;
    color: #ff5722;
}
            /* End of Section */


</style>
