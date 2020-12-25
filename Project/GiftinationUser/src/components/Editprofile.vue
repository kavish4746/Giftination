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
    <h3>Update Your Profile</h3><br>

    <fieldset>
        <input type="email" id="name" name="name"  tabindex="1" autofocus="autofocus" v-model="infoarr[0].u_email" disabled />
    </fieldset>

    <fieldset>
        <input type="text" id="email"  tabindex="2"  required="required" v-model="infoarr[0].u_name">
    </fieldset>

    <fieldset>
    <textarea id="message" tabindex="5" required="required" v-model="infoarr[0].u_address"></textarea>
    </fieldset>

    <fieldset>
    <input type="text" id="email"  tabindex="2"  required="required" v-model="infoarr[0].u_mob">
    </fieldset>

    <fieldset>
      <button @click="update" type="button" id="contact-submit" data-submit="...Sending">Update Profile</button>
    <!--   <div style="color:green; text-align:center;" v-show="successflag">Password updated</div>
     --></fieldset>

  </form>
</div>
<footer1></footer1>
    </body>
    </html>
</div>
</template>

<script>
import infoclass from '../service/profile'
export default {
  name: 'app',
  data () {
    return {
      infoarr:[],
    }
  },
  methods:{
    update:function(){
      infoclass.updateinfodetails(this.infoarr).then(doc=>{
        this.$fire({
											title: "Updated successful",
											type: "success",
											timer: 3000
										}).then(r => {
											console.log(r.value);
										});
                this.$router.push({path:'/profile/'});
      })
    }
  },
  created(){
    infoclass.getEmpdetails(localStorage.getItem('emailid')).then(doc=>{
      this.infoarr=doc.data;
    })
  }
}

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

.error-message {
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
}
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
