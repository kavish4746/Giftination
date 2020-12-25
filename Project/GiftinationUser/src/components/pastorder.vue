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
      <div id="toast"></div>
<div id="toast-cart"></div>

<div class="container">
  <h4><i style="color: orange;" class="fas fa-shopping-basket"></i>&nbsp;Your pending orderd list</h4>
  <hr>
  <br>
  <div v-if="showarrpending.length==0">
  <p style="color:green;font-size:30px;margin-left:35%;">You dont have any pending orders</p>
  <button class="btn btn-sm btn-outline-success" style="margin-left:46%;">Order now...</button>
</div>
<div id="wrap">
	<div id="columns" class="columns_3" disabled="disabled">
  <figure v-for="item in showarrpending" v-bind:key="item.id">
  <img style="height:200px;width:100%;" v-bind:src="'http://localhost:3000/images/products/' + item.img">
	<figcaption>{{item.name}}</figcaption>
    <p><span class="price"><b>Price :-</b> Rs. {{item.price}}</span></p>
    <p><span class="price"><b>Quantity :-</b> {{item.qty}}</span></p>
    <p><span><b>Last orderd on :-</b> {{item.date | moment("Do MMMM YYYY")}}</span></p>
    <p style="color:green;font-size:20px;margin:10px;margin-left:23%;"><i class="far fa-clock"></i>&nbsp;In Process</p>
	</figure>
	
	</div>  
</div>
</div>

<div class="container">
  <h4><i style="color: orange;" class="fas fa-shopping-basket"></i>&nbsp;Your past orderd list</h4>
  <hr>
  <br>
<div v-if="showarrdone.length==0">
  <p style="color:green;font-size:30px;margin-left:35%;">You dont have any past orders</p>
  <button class="btn btn-sm btn-outline-success" style="margin-left:46%;">Order now...</button>
</div>
<div id="wrap" >
	<div id="columns" class="columns_3">
  <figure v-for="item in showarrdone" v-bind:key="item.id">
  <img style="height:200px;width:100%;" v-bind:src="'http://localhost:3000/images/products/' + item.img">
	<figcaption>{{item.name}}</figcaption>
    <p><span class="price"><b>Price :-</b> Rs. {{item.price}}</span></p>
    <p><span class="price"><b>Quantity :-</b> {{item.qty}}</span></p>
    <p><span><b>Last orderd on :-</b> {{item.date | moment("Do MMMM YYYY")}}</span></p>
    <a style="cursor:pointer;" class="button" @click="onclickdetail(item)">product details</a>
	</figure>

	</div>  
</div>
</div>
<footer1></footer1>
    </body>
    </html>
  </div>
</template>

<script>
import processclass from "../service/order"
import pastorderclass from "../service/pastorder"
import productclass from "../service/productdetails"
export default {
  data () {
    return {
      pendingorderarr:[{}],
      pastorderarr:[{}],
      pendingarrlen:'',
      pastarrlen:'',
      showarrdone:[{}],
      showarrpending:[{}],
    }
  },
  created(){
    processclass.getorderbystatus(localStorage.getItem('emailid'),"pending").then(doc=>{
      console.log(doc);
      //console.log(doc.data[0].o_date);

      for(let i=0;i<doc.data.length;i++)
      {
          for(let j=0;j<doc.data[i].joindata.length;j++)
          {
              productclass.getproductbyid(doc.data[i].joindata[j].fk_p_id).then(productdata=>{
                        this.pendingorderarr[j]={
                            p_id:productdata.data[0].p_id,
                            emailid:localStorage.getItem('emailid'),
                            name:productdata.data[0].p_name,
                            price:doc.data[i].joindata[j].c_price,
                            qty:doc.data[i].joindata[j].fk_p_qty,
                            date:doc.data[i].o_date,
                            status:doc.data[i].status,
                            img:productdata.data[0].p_img
                           }

                           this.showarrpending.push(this.pendingorderarr[j]);
              })
          }
      }
      
    })

    console.log(this.pendingorderarr);
    
    processclass.getorderbystatus(localStorage.getItem('emailid'),"done").then(doc=>{
      console.log(doc);
      console.log(doc.data[0].o_date);
      console.log(doc.data[0].joindata[0].fk_p_qty);
      for(let i=0;i<doc.data.length;i++)
      {
          for(let j=0;j<doc.data[i].joindata.length;j++)
          {
            console.log(doc.data[i].joindata);
              productclass.getproductbyid(doc.data[i].joindata[j].fk_p_id).then(productdata=>{
                        this.pastorderarr[j]={
                            p_id:productdata.data[0].p_id,
                            emailid:localStorage.getItem('emailid'),
                            name:productdata.data[0].p_name,
                            price:doc.data[i].joindata[j].c_price,
                            qty:doc.data[i].joindata[j].fk_p_qty,
                            date:doc.data[i].o_date,
                            status:doc.data[i].status,
                            img:productdata.data[0].p_img
                           }
                           console.log(this.pastorderarr[j]);
                          //  pastorderclass.addorder(this.pastorderarr[j]) .then(add=>{
                          //    console.log(add);
                          //  })
                          this.showarrdone.push(this.pastorderarr[j]);

              })
          }
      }
      
      
    })
    console.log(this.pastorderarr);
    console.log(this.showarrdone);
    this.showarrdone.splice(0,1);
    this.showarrpending.splice(0,1);
    console.log(this.showarrdone);
  },
  methods:{
    onclickdetail:function(item)
		{
			console.log(item.p_id);
			this.$router.push({path:'/productdetail/'+item.p_id});
		},
  }
}
</script>

<style scoped>
.footer{
  margin-top:60%;
}
.container{
  margin-top: 50px;
}

h1, .card-title, a, #toast{
  font-family: 'Roboto', sans-serif;
}

h4{
  color: orange;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
div[disabled=disabled] {
  pointer-events: none;
  opacity: 0.4;
}
#wrap{
	width: 90%;
	max-width: 1100px;
	margin: 50px auto;
}
.columns_2 figure{
   width:50%;
   margin-right:1%;
}
.columns_2 figure:nth-child(2){
	margin-right: 0;
}
.columns_3 figure{
   width:32%;
   margin-right:1%;
}
.columns_3 figure:nth-child(3){
	margin-right: 0;
}
.columns_4 figure{
   width:24%;
   margin-right:1%;
}
.columns_4 figure:nth-child(4){
	margin-right: 0;
}
.columns_5 figure{
   width:19%;
   margin-right:1%;
}
.columns_5 figure:nth-child(5){
	margin-right: 0;
}
#columns figure:hover{
	-webkit-transform: scale(1.1);
	-moz-transform:scale(1.1);
	transform: scale(1.1);
}
/* #columns:hover figure:not(:hover) {
	opacity: 0.4;
} */
div#columns figure {
	display: inline-block;
	background: #FEFEFE;
	border: 2px solid #FAFAFA;
	box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
	margin: 0 0px 15px;
	-webkit-column-break-inside: avoid;
	-moz-column-break-inside: avoid;
	column-break-inside: avoid;
	padding: 15px;
	padding-bottom: 5px;
	background: -webkit-linear-gradient(45deg, #FFF, #F9F9F9);
	opacity: 1;
	-webkit-transition: all .3s ease;
	-moz-transition: all .3s ease;
	-o-transition: all .3s ease;
	transition: all .3s ease;
}

div#columns figure img {
	width: 100%;
	border-bottom: 1px solid #ccc;
	padding-bottom: 15px;
	margin-bottom: 5px;
}

div#columns figure figcaption {
  font-size: .9rem;
  color: #444;
  line-height: 1.5;
  height:60px;
  font-weight:600;
  text-overflow:ellipsis;
}

a.button{
  padding:10px;
  background:orangered;
  margin:10px;
  display:block;
  text-align:center;
  color:#fff;
  transition:all 1s linear;
  text-decoration:none;
  text-shadow:1px 1px 3px rgba(0,0,0,0.3);
  border-radius:3px;
  border-bottom:3px solid #ff6536;
  box-shadow:1px 1px 3px rgba(0,0,0,0.3);
}
a.button:hover{
  background:#ff6536;
  border-bottom:3px solid salmon;
  color:#f1f2f3;
}
@media screen and (max-width: 960px) { 
  #columns figure { width: 24%; }
}
@media screen and (max-width: 767px) {
  #columns figure { width:32%;}
}
@media screen and (max-width: 600px) {
  #columns figure { width: 49%;}
}
@media screen and (max-width: 500px) {
  #columns figure { width: 100%;}
}
</style>
