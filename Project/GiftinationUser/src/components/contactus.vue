<template>
<div>

    <html>
    <head>
      <title>GiftiNation</title>
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

	<!-- fontawesome.cdn for ICONS-->
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

	<!--animatecss.cdn for ANIMATION-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />

    </head>
    <body>
      <header>
        <header1></header1>
      </header>
  <div class="container1">
  <form id="contact">
    <h3>Contact Form</h3>
    <fieldset>
      <input placeholder="Your Full Name" v-model="contactarr[0].user_name" type="text" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" v-model="contactarr[0].user_emailid" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" v-model="contactarr[0].user_message" required></textarea>
    </fieldset>
    <fieldset>
      <button @click="onsend" type="button" id="contact-submit" data-submit="...Sending">Send now</button>
    </fieldset>
  </form>
</div>
<footer1></footer1>
    </body>
    </html>
</div>
</template>
<script>
import contactclass from '../service/contact'
export default {

  data () {
    return {
			contactarr:[{
				user_name:'',
				user_emailid:'',
				user_message:'',
				status:'pending'
				}
			]
    }
	},
	methods:{
		onsend:function(){
			console.log(this.contactarr[0]);
			contactclass.addcontact(this.contactarr[0]).then(doc=>{
									this.$fire({
                      title: "Your message was successfully received",
                      type: "success",
                      timer: 3000
                  }).then(r => {
                    this.contactarr[0].user_name = null;
                    this.contactarr[0].user_emailid = null;
                    this.contactarr[0].user_message = null;
                  });
			})
		}
	}
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

.container1 {
	max-width:800px;
	width:100%;
	margin:0 auto;
	position:relative;
	background-color: lightgray;
}

#contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea, #contact button[type="button"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }

#contact {
	background:fade(#F9F9F9,85);
	padding:25px;
	margin:80px 0;
}

#contact h3 {
	color: #000;
	display: block;
	font-size: 30px;
	font-weight: 400;
}

#contact h4 {
	margin:5px 0 15px;
	display:block;
	font-size:13px;
}

fieldset {
	border: medium none !important;
	margin: 0 0 10px;
	min-width: 100%;
	padding: 0;
	width: 100%;
}

#contact input[type="text"], #contact input[type="email"], #contact input[type="tel"], #contact input[type="url"], #contact textarea {
	width:100%;
	border:1px solid #CCC;
	background:#FFF;
	margin:0 0 5px;
	padding:10px;
}

#contact input[type="text"]:hover, #contact input[type="email"]:hover, #contact input[type="tel"]:hover, #contact input[type="url"]:hover, #contact textarea:hover {
	transition:border-color 0.3s ease-in-out;
	border:1px solid #AAA;
}

#contact textarea {
	height:200px;
	max-width:100%;
  resize:none;
}

#contact button[type="button"] {
	cursor:pointer;
	width:100%;
	border:none;
	background:#000;
	color:#FFF;
	margin:0 0 5px;
	padding:25px 10px;
	font-size:15px;
	text-transform: uppercase;
}

#contact button[type="button"]:hover {
	background:#09C;
}

#contact button[type="button"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }

#contact input:focus, #contact textarea:focus {
	outline:0;
	border:1px solid #999;
}

label.error{
	color: darkred;
	padding-left: 10px;
	font-weight: bold;
}
input.error{
	border-color: darkred !important;
}
</style>
