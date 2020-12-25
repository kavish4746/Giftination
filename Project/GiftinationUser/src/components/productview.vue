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
  <h1>{{catname}} products</h1>
  <hr>
  <br>
  <div class="row">
  		<div class="col-lg-4" v-for="item in productarr" v-bind:key="item.productid" style="padding:10px;">
    		<div class="card" style="width:90%;">
      			<span id="heart" style="margin-left:80%;" class="heart"><i @click="onclickwishlist(item)" class="fas fa-heart"></i></span>
  				<img style="height:300px;width:100%;" v-bind:src="'http://localhost:3000/images/products/' + item.p_img" @click="onclickdiv(item)" class="first-image">
  				<div class="card-body">
    				<a class="a" @click="onaddtocart(item)"><center>Add to cart</center></a>
    				<hr>
    				<center>
      					<h5 class="card-title">{{item.p_name}}</h5>
						  <h6><span class="rs">Rs. {{item.p_price}}</span></h6>
    				</center>

  				</div>
			</div>
		</div>
  </div>
</div><br>
<footer1></footer1>
    </body>
    </html>
</div>
</template>
<script>
import productclass from '../service/productview'
import wishlistclass from '../service/wishlist'
import cartclass from '../service/cart'
export default {
    data:function(){
        return{
			catid:'',
			catname:'',
			productarr:[{}],
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
        this.catid = this.$route.params.catid;

        productclass.getprobycat(this.catid).then(doc=>{
            this.productarr=doc.data;
   	})
  	productclass.categoryname(this.catid).then(doc=>{
  		this.catname=doc.data[0].cat_name;
		})
    },
	methods:{
		onclickwishlist:function(item){
				wishlistclass.getwishlistbyemail(localStorage.getItem('emailid')).then(doc=>{
							for(let i=0;i<doc.data.length;i++)
							{
								if(doc.data[i].fk_p_id==item.p_id)
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
									this.wishlistarr[0].fk_p_id=item.p_id;
									this.wishlistarr[0].fk_p_name=item.p_name;
									this.wishlistarr[0].fk_p_img=item.p_img;
									this.wishlistarr[0].fk_cat_id=item.fk_cat_id;
									this.wishlistarr[0].fk_p_price=item.p_price;

									wishlistclass.addtowishlist(this.wishlistarr[0]).then(doc=>{
										console.log(doc);
										this.$fire({
											title: "Category successfully added",
											type: "success",
											timer: 3000
										}).then(r => {
											console.log(r.value);
										});
									})

							}
					})
		},
		onclickdiv:function(item)
		{
			this.$router.push({path:'/productdetail/'+item.p_id});
		},
		onaddtocart:function(item){
			cartclass.getcartbyemail(localStorage.getItem('emailid')).then(doc=>{
					if(doc.data.length>0)
					{
						for(let i=0;i<doc.data.length;i++)
						{
							if(doc.data[i].fk_p_id==item.p_id)
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
						this.cartarr[0].fk_p_id=item.p_id;
						this.cartarr[0].fk_p_name=item.p_name;
						this.cartarr[0].fk_p_des=item.p_des;
						this.cartarr[0].fk_p_img=item.p_img;
						this.cartarr[0].fk_cat_id=item.fk_cat_id;
						this.cartarr[0].fk_p_price=item.p_price;
						this.cartarr[0].c_price=item.p_price;
						cartclass.addtocart(this.cartarr[0]).then(doc=>{
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
						this.cartarr[0].fk_p_id=item.p_id;
						this.cartarr[0].fk_p_name=item.p_name;
						this.cartarr[0].fk_p_des=item.p_des;
						this.cartarr[0].fk_p_img=item.p_img;
						this.cartarr[0].fk_cat_id=item.fk_cat_id;
						this.cartarr[0].fk_p_price=item.p_price;
						this.cartarr[0].c_price=item.p_price;
						cartclass.addtocart(this.cartarr[0]).then(doc=>{
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
.a{
  cursor:pointer;
}



@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto&display=swap');

.container{
  margin-top: 50px;
}

h1, .card-title, a, #toast{
  font-family: 'Roboto', sans-serif;
}

h1{
  color: yellowgreen;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.card{
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  border-radius: 15px;
  transition: transform .2s;
}

.card-body{
  padding: 10px;
  margin-top: -50px;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease-in-out;
}

.heart{
  color: #989898;
  margin-top: 15px;
  margin-left: 230px;
  font-size: 30px;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  padding: 0px;
  text-align: center;
}

.heart-active{
  color: #C50707;
}

.heart:hover{
  color: red;
  background-color: #f9f9f9;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease-in-out;
}

.card-body a{
  visibility: hidden;
}

.card:hover > .card-body{
  margin-top: -0px;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}

.card:hover{
  transform: scale(1.02);
}

.card:hover > .card-body > a{
  visibility: visible;
}

.first-image{
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.cart, .wish{
  padding: 5px;
  width: 50px;
  height: 50px;
  margin-left: -24px;
  margin-top: 0px;
  margin-right: 3px;
  background-color: #fff;
  color: #5C7CFA;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  text-align: center;
  -ms-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wish{
  color: #C50707;
}

#toast, #toast-cart{
  padding: 10px;
  padding-left: 5px;
  position: fixed;
  width: 230px;
  height: 50px;
  top: 0;
  left: 80%;
  transform:translate(-50%);
  background-color: #EFF2FF;
  color: #76777E;
  padding: 1px;
  border-radius: 8px;
  text-align:center;
  z-index: 1;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  visibility: hidden;
  opacity: 0;
  -ms-display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
#toast.show, #toast-cart.show{
  visibility:visible;
  animation:fadeInOut 3s;
}

@keyframes fadeInOut{
  5%,95%{opacity:1;top:50px}
  15%,85%{opacity:1;top:30px}
}
</style>

