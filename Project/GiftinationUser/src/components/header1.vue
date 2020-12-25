<template>
  <div>
    <!-- <div id="rc_logo">
//comment<a class="logo" title="Logo"><b><i style="color:lightseagreen;">j</i><span style="color:lightseagreen;">H</span></b></a> Swap this placeholder out for your logo image
</div>

<div class="rc_nav" id="centered_nav">
 <a href="./Dashboard.vue" title="Home">HOME</a>
<a href="./offer" title="Services">OFFERS</a>
<a href="#about" title="About">CART</a>
<a href="#about" title="About">PAST ORDERS</a>
<a href="#about" title="About">PROFILE</a>
<a href="#about" title="About">ABOUT US</a>
<a href="#contact" title="Contact">CONTACT US</a>

<router-link to="/dashboard">HOME</router-link>
<router-link to="/offer" title="Offers">OFFERS</router-link>
<router-link to="/cart" title="Cart"><i style="color:white;" class="fas fa-shopping-cart"></i>&nbsp;CART</router-link>
<router-link to="/pastorder" title="Your past orders">PAST ORDERS</router-link>
<router-link to="/profile" title="Your profile"><i style="color:white;" class="fas fa-user"></i>&nbsp;PROFILE</router-link>
<router-link to="/wishlist" title="your wishlist"><i style="color:red;" class="fas fa-heart"></i>WishList</router-link>
<router-link to="/aboutus" title="About">ABOUT US</router-link>
<router-link to="/contactus" title="Contact"><i style="color:white;" class="fas fa-comment"></i>&nbsp;CONTACT US</router-link>
<router-link to="/"><i  class="fas fa-sign-out-alt"></i>&nbsp;Logout</router-link>
<a href="javascript:void(0);" title="Menu" style="font-size:18px;" class="icon" onclick="myFunction()">&#9776;</a>

</div> -->

<header>
      <!-- Navigation -->
      <!-- navbar-dark bg-dark static-top -->
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <strong class="logo">GiftiNation</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active mx-3">
                <router-link to="/dashboard" class="nav-link" title="Offers">Home</router-link>
                  <span class="sr-only">(current)</span>
              </li>
         <!--      <li class="nav-item mx-3">
                <router-link to="/offer" class="nav-link" title="Offers">Offers</router-link>
              </li>
          -->     <li class="nav-item mx-3">
                <router-link to="/wishlist" class="nav-link" title="Offers"><i class="fa fa-heart" aria-hidden="true"></i>&nbsp;Wishlist</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/cart" class="nav-link" title="Offers"><i class="fa fa-shopping-bag" aria-hidden="true"></i>&nbsp;cart</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/pastorder" class="nav-link" title="Offers">Past Orders</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/contactus" class="nav-link" title="Offers">Contact us</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/profile" class="nav-link" title="Offers">Profile</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/aboutus" class="nav-link" title="Offers">About us</router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link to="/" class="nav-link" title="logout"><i class="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</router-link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>

</script>

<style scoped>
/* .logo
{
  font-size:30px;
  color:lightseagreen;
}
#rc_logo {
 left: 25px;
 padding: 15px;
 position: absolute;
 color: #fff;
 font-size: 19px;
 font-family: Poppins;
 text-decoration: none;
}

#rc_logo a {
color: inherit;
text-decoration: none;
}

.rc_nav {
  overflow: hidden;
  background-color: #363841;
  text-align: center;
  z-index: 6;
}

.rc_nav a {
 display: inline-block;
 margin-right: -4px;
 color: #fff;
 padding: 22px 22px;
 text-decoration: none;
 font-family: Poppins;
 font-size: 18px;
 z-index: 9;
}

.rc_nav a:hover {
  background-color: #575b69;
}

.rc_nav .icon {
  display: none;
}

.rc_content {
  text-align: center;
  padding-left:14px;
  font-family: Poppins;
  margin-top: 100px;
  color: #8e909b;
}


@media screen and (max-width: 820px) {
  .rc_nav a {display: none;}
  .rc_nav a.icon {
    float: right;
    display: block;
    width: 60px;
  }
}

@media screen and (max-width: 820px) {
  .rc_nav.responsive {position: relative; top: 73px;}
  .rc_nav.responsive .icon {
    position: fixed;
    right: 0;
    top: 0;
  }
  .rc_nav.responsive a {
    float: none;
    display: block;
    text-align: center;
  }

} */
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
    font-size: 19px;
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
.container-fluid .banner {
    background: linear-gradient(to bottom, #ff9800d4, #FFC107);
height: 500px;
}
.inner-banner {
    border: 2px solid #fff;
}
.container-fluid .banner .image {
    background: url(../assets/logo.png) no-repeat;
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


</style>
