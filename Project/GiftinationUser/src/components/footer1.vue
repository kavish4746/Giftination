<template>
  <div>

  <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-8 footer-widget one">
            <strong class="logo">GiftiNation</strong>
            <div class="row">
              <div class="col-md">
                <p class="dummy-desc">
                 Shopping for that perfect gift can be overwhelming and stressful. With events ranging from housewarming, birthdays, anniversaries, and more, gifting ideas can become fairly confusing. With the availability of exclusive gifts online, it has become easier to find beautiful pieces that are ideal for different occasions.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-3 footer-widget two">
            <h5>Folow Us on Social Media</h5>
            <div class="row"></div>
            <div class="social-icons col-md">
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-google"></a>
              <a href="#" class="fa fa-linkedin"></a>
              <a href="#" class="fa fa-youtube"></a>
              <a href="#" class="fa fa-instagram"></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright text-center">
      <span class="text-center"
        >Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2020 |
         <b> GiftiNation</b></span
      >
    </div>



    <!-- <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="footer-box">
                        <div class="footer-title">
                            <h5>Download Our Mobile App</h5>
                        </div>
                        <div class="footer-desc">
                            <p>Mobile application is under construction...please wait for some time</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer-box">
                        <div class="footer-title">
                            <router-link to="/dashboard"><div class="footer-logo"><img style="height:90%;width:90%;" src="../images/jH.png" alt="" /></div></router-link>
                        </div>
                        <div class="footer-desc">
                            <p style="text-align: center;font-size:20px;">One stop for Shopping</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="footer-box">
                        <div class="footer-title">
                            <h5>Quick Links</h5>
                        </div>
                        <div class="footer-desc">
                            <ul>
                                <li><router-link to="/aboutus"> More About Us</router-link></li>
                                <li><a href="#">Visit Store</a></li>
                                <li><router-link to="/contactus">Let's Connect</router-link></li>
                                <li><a href="#">Locate Store</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="footer-box">
                        <div class="footer-title">
                            <h5>Sites Links</h5>
                        </div>
                        <div class="footer-desc">
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Shipping Details</a></li>
                                <li><router-link to="/offer">Different Offers</router-link></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> -->
  </div>
</template>

<script>

</script>
<style scoped>
/* footer#footer {
    background: black;
    color: #6B7780;
    padding: 60px;
}
.app-store {
    display: inline-block;
    width: 150px;
    margin-right: 10px;
}

.app-img {
    float: left;
}
.footer-title{
    margin-bottom: 20px;
}
.footer-title h5 {
    color: white;
}
.footer-logo{
	width: 150px;
	margin: auto;
}
.footer-desc ul{
	list-style: none;
	padding-left: 0px;
}
.footer-desc ul li{
	padding: 6px 0px;
} */
.footer {

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
  .navbar-brand .logo,
footer .logo{
    font-family: 'Dancing Script', cursive;
    font-size: 2em;
    color: #ff5722;
}

</style>

