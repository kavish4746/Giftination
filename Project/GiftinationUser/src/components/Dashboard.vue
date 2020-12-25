<template>
  <div>
     <html>
  <head>
    <title>Fashion</title>
    <link rel="stylesheet" href="home.css" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
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
    <header1></header1>
    <!-- main -->
    <div class="container-fluid">
      <!-- banner -->
      <div class="row banner" color="primary">
        <div class="row col-md inner-banner m-4">
          <div class="col-md-6 content bg-circle align-self-center text-center">
            <h1 class="text-center">Hello christmas!</h1>
            <h5 class="text-center">Enjoy Amazing christmas 2020 sale</h5><br>
            <p class="dummy-desc">
            This festival of Christmas is celebrated every year on 25th December worldwide.
            On this day, Lord Jesus was born. He became known in the world as Christ (the giver of life to the deceased).
            That is why he is called Jesus Christ. The pomp begins about a week before the main festival. People clean their houses.
            Cleanliness drives are carried out everywhere. And Gifts are arranged for the final day.
            </p>
            <div class="button">
            </div>
          </div>
          <div class="col-md-6 image alig-end">
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
    <!-- About -->
    <div class="container text-center about my-5">
      <div class="row">
        <div class="col-lg col-md col-sm col-xs">
          <h2 class="custom-title my-5">
            What We Offer
            <p class="dummy-desc"><br>
            Shopping for that perfect gift can be overwhelming and stressful. With events ranging from housewarming, birthdays, anniversaries, and more, gifting ideas can become fairly confusing. With the availability of exclusive gifts online, it has become easier to find beautiful pieces that are ideal for different occasions.
            </p>
          </h2>
        </div>
      </div>
    </div>
    <!-- collection -->
    <div class="container text-center collections my-5">
      <h2 class="custom-title">Top Collections</h2>
      <div class="row my-5">
        <div class="col-md-4">
          <div class="card" style="width: 18rem;height: 27rem;">
            <img class="card-img-top" src="../images/birthdaycard.png" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Birthday cards</h5>
              <p class="card-text dummy-desc">
              Birthday is one day when everyone deserves to be spoiled and pampered. So, it is our social responsibility to select and buy appropriate presents and cards for our friends and families on upcoming birthdays.  </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;height: 27rem;">
            <img class="card-img-top" src="../images/pics/Gift Basket/GBmain.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Gift Basket</h5>
              <p class="card-text dummy-desc">
              We all get confused when we are faced with the task of giving a gift to someone, especially if we do not know the likes or dislikes of that person. Giftination provides you the perfect solution for this problem by offering some of the best gifting options!</p>
              </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;height: 27rem;">
            <img class="card-img-top" src="../images/pics/Smoking Fountain/SFmain.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Smoking Fountain</h5>
              <p class="card-text dummy-desc">
               Want to buy smoking fountain online for you and your loved ones? We have special pieces which are perfect for gifting. Check out all the variants right now.
              </p><br><br><br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- sale -->
    <div class="container-fluid text-center my-5">
      <div class="row">
        <div class="col-md align-self-center">
          <h2 class="salefifty">Enjoy a Big Sale!</h2>
          <h5 class="salefifty">50% off on entire stock</h5>
        </div>
      </div>
    </div>



    <!-- categorywise products -->

    <div class="container text-center collections my-5">
      <h2 class="custom-title">Different Categories</h2>
      <div class="row my-5">
        <div class="col-md-4">
          <div class="card" style="width: 18rem;height:30rem;">
            <img class="card-img-top" src="../images/birthdaycard.png" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Birthday Cards</h5>
              <p class="card-text dummy-desc">
              Birthday is one day when everyone deserves to be spoiled and pampered. So, it is our social responsibility to select and buy appropriate presents and cards for our friends and families on upcoming birthdays.  </p>
              <br><router-link to="/productview/1" class="btn">View more..</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;height:30rem;">
            <img class="card-img-top" src="../images/pics/Gift Basket/GBmain.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Gift Basket</h5>
              <p class="card-text dummy-desc">
              We all get confused when we are faced with the task of giving a gift to someone, especially if we do not know the likes or dislikes of that person. Giftination provides you the perfect solution for this problem by offering some of the best gifting options!</p>
              <br>
              <router-link to="/productview/2" class="btn">View more..</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;height:30rem;">
            <img class="card-img-top" src="../images/pics/Smoking Fountain/SFmain.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Smoking Fountain</h5>
              <p class="card-text dummy-desc">
               Want to buy smoking fountain online for you and your loved ones? We have special pieces which are perfect for gifting. Check out all the variants right now.
              </p><br><br><br>
              <router-link to="/productview/3" class="btn">View more..</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <div class="card" style="width: 18rem;height:30rem;">
            <img class="card-img-top" src="../images/pics/Teddy/TEDDYMAIN.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Teddy</h5>
              <p class="card-text dummy-desc">
             Get the best soft toys for kids, wife, girlfriend, or any other friend who likes them on their birthdays, anniversary, valentine’s day or any other special day. It will bring more joy to their lives.
             </p><br><br>
              <router-link to="/productview/4" class="btn">View more..</router-link>
            </div>
          </div>
        </div>
          <div class="col-md-4">
          <div class="card" style="width: 18rem;height:30rem;">
            <img class="card-img-top" src="../images/pics/Mug/MUGMAIN.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Mugs</h5>
             <p class="card-text dummy-desc">
            Mugs are the most common gifts around the world and probably the most useful one amongst its competitors too. Mugs are essential for anyone with the habit of drinking tea and coffee.
            </p><br><br>
              <router-link to="/productview/5" class="btn">View more..</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem;height:30rem;">
            <img class="card-img-top" src="../images/pics/Photo Frames/PFMAIN.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Photo Frames</h5>
             <p class="card-text dummy-desc">
             Decorate your walls and desks with stunning photo frames. Give your favourite moments a special touch with our versatile range of frames. Available in different sizes and colours to show off your awesome photos.
             </p><br>
             <router-link to="/productview/6" class="btn">View more..</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  <footer1></footer1>
  </body>
</html>

  </div>
</template>

<script>
import product from "../service/productview";
export default {
  data () {
    return {
      catid:'',
    }
  },
  created(){
      product.getAllcategory().then(doc=>{
        console.log(doc);
      });
  },
  methods:{
  }
}
</script>

<style scoped>

*, body {
    margin: 0;
    padding: 0;
}
body::-webkit-scrollbar {
    width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: #F44336;
}
.dummy-desc {
    font-size: 14px;
}
.custom-title {
  color:  #FF5722;
}
.navbar a{
    color: #ff5722;

}
.navbar a:hover {
    color: #009688;

}
.navbar a:active {

    border-bottom: 1px solid #ff5722;

}
.navbar-brand .logo,
footer .logo{
    font-family: 'Dancing Script', cursive;
    font-size: 2em;
    color: #ff5722;
}

.salefifty{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 3em;
    color: orange;
}
.container-fluid .banner {
    background: linear-gradient(to bottom,orange, orange);
height: 500px;
}
.inner-banner {
    border: 2px solid #fff;
}
.container-fluid .banner .image {
    background: url(../images/giftmain.jpg) no-repeat;
    background-size: contain;
}
.container-fluid .banner .content {
    color: #fff;
    line-height: 25px;
}
.container-fluid .banner .content h1{
    font-family: 'Dancing Script', cursive;
    font-size: 5em;
    color: #FF5722;
    text-shadow: 2px 2px #009688;
}

.button .btn,
.card .btn {
    font-size: 16px;
    font-weight: 600;
    color: #FF5722;
    border: 1px solid #FF5722;
    border-radius: 0;
}
.button .btn:hover,
.card .btn:hover
 {
background: #FF5722;
color: #fff;
}

/* collection */
.collections .card img {
    height: 200px;

}
.collections .card .card-title {
    color: #009688;
    }
    /* sale section */
.sale-section {
    height: 350px;
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
color: #fff;
line-height: 25px;
}
.sale-section h2 {
    font-family: 'Dancing Script', cursive;
    font-size: 3em;
}
/* grid */

.grid{
    height: 300px;
}
.grid:hover {
    opacity: 0.6;
    color: #fff;
}
.grid .button {
    height: 300px;
}
.grid:hover .button {
    height: 275px;
    margin: 15px 0px;
    border: 1px solid #fff;
}
.grid .button {
visibility: hidden;}
.grid:hover > .button {
visibility: visible;
    cursor: pointer;
}
.grid-1 .grid-1-1 {
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
}
.grid-1 .grid-1-2 {
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
}
.grid-2 .grid-2-1 {
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
}
.grid-2 .grid-2-2 {
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
}
.grid-2 .grid-2-3 {
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
}
.grid-3 .grid-3-1 {
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
}
.grid-3 .grid-3-2 {
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
}
.footer {
    background: url(../assets/logo.png) no-repeat;
    background-size: cover;
    height: 300px;
    padding: 15px;
background-color: #333;
color: #fff;
}
.footer .footer-widget {
    border-right: 1px solid #fff;
}
.footer .footer-widget:last-child
{
border-right:0px;
}
.footer-widget h5 {
    color: #ff5722;
}
/* footer-widget two */
.footer-widget.two ul > li {
list-style: none;
cursor: pointer;
}
.footer-widget.two ul > li:hover {
color: #ff5722;    }
/* footer-widget three */
/* social icons */
.footer .fa {
    padding: 10px 0px;
    font-size: 20px;
    width: 23%;
    border-radius: 50%;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    margin: 10px 10px;
    color: #fff;
  }
  .footer a:hover {
      text-decoration: none;
  }
  .footer .fa-facebook {
    background: #3B5998;
  }

  .footer .fa-twitter {
    background: #55ACEE;
  }

  .footer .fa-google {
    background: #dd4b39;
  }

  .footer .fa-linkedin {
    background: #007bb5;
  }

  .footer .fa-youtube {
    background: #bb0000;
  }

  .footer .fa-instagram {
    background: #125688;
  }
  .copyright {

    background: #ff5722;
  }
  .copyright b {
      color: #fff;
      cursor: pointer;
  }


</style>
