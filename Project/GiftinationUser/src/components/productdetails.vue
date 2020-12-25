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
      <div class="container">

    <div class="row">
        <div class="col-xxs-12 col-sm-5">
            <div class="lemonchase-logo">
                <img class="img-responsive" v-bind:src="'http://localhost:3000/images/products/' + productarr[0].p_img" alt="">
            </div>
        </div>
        <div class="col-xxs-12 col-sm-7 lemonchase">
            <div class="">
                <br>
                <h2>{{productarr[0].p_name}}</h2>
                <br><br>
                <h6 class="des">Prouct Description</h6>
                <h6>{{productarr[0].p_des}}</h6>
                <br>
                <h5 class="des">Product price</h5>
                <h5>Rs. {{productarr[0].p_price}}</h5>
                <br><br>

                <a @click="onaddtocart" style="width:100%;" class="btn btn-sm btn-outline-success"><i class="fas fa-shopping-cart"></i>&nbsp;Add to cart</a>
                <br>
                <br>
                <a @click="onclickwishlist" style="width:100%;" class="btn btn-sm btn-outline-danger"><i class="fas fa-heart"></i>&nbsp;Add to wishlist</a>
      </div>
    </div>
  </div>
  <br><br>
  <h4><i style="color:green;" class="fas fa-shopping-basket"></i>&nbsp;You may also like</h4>
  <hr>
  <div class="row">
    <div class="col-xxs-12 col-xs-4 col-md-4" v-for="item in similararr" v-bind:key="item.p_id">
            <div class="container1">
            <br>
            <div id="wrap">
	            <div id="columns" class="columns_3">
                    <figure>
                        <img style="height:200px;" v-bind:src="'http://localhost:3000/images/products/' + item.p_img">
	                    <figcaption>{{item.p_name}}</figcaption>
                        <p><span style="color:blue;">Price :- Rs. {{item.p_price}}</span></p>
                        <a class="button" @click="ondetails(item)">More details</a>
	                </figure>
	            </div>
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

import productclass from '../service/productdetails'
import wishlistclass from '../service/wishlist'
import cartclass from '../service/cart'

export default {
    data:function(){
    return{
        p_id:'',
        cat_id:'',
        productarr:[],
        similararr:[{}],
        flag:0,
			wishlistflag:0,
			wishlistarr:[{
				fk_emailid:'',
				fk_p_id:'',
				fk_p_name:'',
				fk_p_img:'',
				fk_cat_id:'',
				fk_p_price:'',
			}],
			cartarr:[{
    			fk_emailid : "",
    			fk_p_id : "",
    			fk_p_name : "",
    			fk_p_des : "",
    			fk_p_img: "",
    			fk_cat_id :'',
    			fk_p_price :'',
    			qty : 1,
    			c_price:'',
			}]
    }
    },
    created(){
        this.p_id=this.$route.params.p_id;
        productclass.getproductbyid(this.p_id).then(doc=>{
            this.productarr=doc.data;
            this.cat_id=doc.data[0].fk_cat_id;
            console.log(this.productarr);
                productclass.getprobycat(this.cat_id).then(doc=>{
                    for(let i=0;i<doc.data.length;i++){
                        if(this.p_id != doc.data[i].p_id){
                          this.similararr.push(doc.data[i]);
                        }
                    }
                    this.similararr.splice(0,1);
            })
        })
    },
    methods:{
        ondetails:function(item){

            this.similararr = [{}];
            productclass.getproductbyid(item.p_id).then(doc=>{
            this.productarr=doc.data;
            this.cat_id=doc.data[0].fk_cat_id;
                productclass.getprobycat(this.cat_id).then(doc=>{
                    for(let i=0;i<doc.data.length;i++){
                        if(item.p_id != doc.data[i].p_id){
                          this.similararr.push(doc.data[i]);
                        }
                    }
                    this.similararr.splice(0,1);

		        })
            })
        },
        onclickwishlist:function(item){
				wishlistclass.getwishlistbyemail(localStorage.getItem('emailid')).then(doc=>{
							for(let i=0;i<doc.data.length;i++)
							{
								if(doc.data[i].fk_p_id==this.productarr[0].p_id)
								{
									this.$fire({
									title: "Already in your wishlist",
									type: "error",
									timer: 3000
									}).then(r => {
									console.log(r.value);
									});
									this.wishlistflag=1;
									break;
								}
								else{
									this.wishlistflag=0;
								}
							}
							if(this.wishlistflag==0)
							{
									this.wishlistarr[0].fk_emailid=localStorage.getItem('emailid');
									this.wishlistarr[0].fk_p_id=this.productarr[0].p_id;
									this.wishlistarr[0].fk_p_name=this.productarr[0].p_name;
									this.wishlistarr[0].fk_p_img=this.productarr[0].p_img;
									this.wishlistarr[0].fk_cat_id=this.productarr[0].fk_cat_id;
									this.wishlistarr[0].fk_p_price=this.productarr[0].p_price;

									wishlistclass.addtowishlist(this.wishlistarr[0]).then(doc=>{
										console.log(doc);
										this.$fire({
											title: "Added to your Wishlist",
											type: "success",
											timer: 3000
										}).then(r => {
											console.log(r.value);
										});
									})

							}
					})
		},
		onaddtocart:function(){
			console.log(localStorage.getItem('emailid'));
			cartclass.getcartbyemail(localStorage.getItem('emailid')).then(doc=>{
				console.log("CART ARR"+doc.data.length)
					if(doc.data.length>0)
					{
						for(let i=0;i<doc.data.length;i++)
						{
							if(doc.data[i].fk_p_id==this.productarr[0].p_id)
							{
								this.$fire({
									title: "Already in your cart",
									type: "error",
									timer: 3000
									}).then(r => {
									console.log(r.value);
									});
									this.flag=1;
									break;
							}
							else
							{
								this.flag=0;
							}
						}
						if(this.flag==0)
						{
						this.cartarr[0].fk_emailid=localStorage.getItem('emailid');
						this.cartarr[0].fk_p_id=this.productarr[0].p_id;
						this.cartarr[0].fk_p_name=this.productarr[0].p_name;
						this.cartarr[0].fk_p_des=this.productarr[0].p_des;
						this.cartarr[0].fk_p_img=this.productarr[0].p_img;
						this.cartarr[0].fk_cat_id=this.productarr[0].fk_cat_id;
						this.cartarr[0].fk_p_price=this.productarr[0].p_price;
						this.cartarr[0].c_price=this.productarr[0].p_price;
						cartclass.addtocart(this.cartarr[0]).then(doc=>{
						console.log(doc);
						this.$fire({
  						title: "Item Added to your cart",
  						type: "success",
  						timer: 3000
					}).then(r => {
  						console.log(r.value);
					});
				})
						}
				  }
				  else
				  {
					  	this.cartarr[0].fk_emailid=localStorage.getItem('emailid');
						this.cartarr[0].fk_p_id=this.productarr[0].p_id;
						this.cartarr[0].fk_p_name=this.productarr[0].p_name;
						this.cartarr[0].fk_p_des=this.productarr[0].p_des;
						this.cartarr[0].fk_p_img=this.productarr[0].p_img;
						this.cartarr[0].fk_cat_id=this.productarr[0].fk_cat_id;
						this.cartarr[0].fk_p_price=this.productarr[0].p_price;
						this.cartarr[0].c_price=this.productarr[0].p_price;
						cartclass.addtocart(this.cartarr[0]).then(doc=>{
						console.log(doc);
						this.$fire({
  						title: "Item Added to your cart",
  						type: "success",
  						timer: 3000
					}).then(r => {
  						console.log(r.value);
					});
				})
				  }
    		})
		},
    }
}
</script>



<style scoped>
.buttons
{
    margin-top:10px;
}
.lemonchase {
  margin-bottom: 20px;
}
h6 {
  color:lightsteelblue;
  font-size:18px;
}
h5
{
    font-family: 'Times New Roman', Times, serif;
    color:blue;
}
.des
{
    font-size:20px;
    color:lightslategray;
}
.lemonchase-logo {
  margin:60px 20px;
}
.img-responsive
{
    height: 370px;
    width:100%;
    margin-top:-10%;
    margin-left:-7%;
}


h2,h6{
    font-family: 'Times New Roman', Times, serif;
}


h3{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:navy;
}
h3:hover{
    color:lightblue;
}
button{
    width:48%;
}

.rs
{
    color:red;
}
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
  color: yellowgreen;
  font-family: Georgia, 'Times New Roman', Times, serif;
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
   width:100%;
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
  background:salmon;
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
  cursor:pointer;
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


