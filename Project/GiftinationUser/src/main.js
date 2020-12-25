import Vue from 'vue'
import App from './App.vue'
import login from './components/login.vue';
import signup from './components/signup.vue';
import forgetpassword from './components/forgetpassword.vue';
import dashboard from './components/Dashboard.vue';
import profile from './components/profile.vue';
import editprofile from './components/Editprofile.vue';
import editpassword from './components/Editpassword.vue';
import cart from './components/cart.vue';
import offer from './components/Offer.vue';
import pastorder from './components/pastorder.vue';
import aboutus from './components/aboutus.vue';
import contactus from './components/contactus.vue';
import productview from './components/productview.vue';
import productdetail from './components/productdetails.vue';
import header1 from './components/header1.vue';
import footer1 from './components/footer1.vue';
import wishlist from './components/wishlist.vue';
import VueRouter from 'vue-router';
import VueSimpleAlert from "vue-simple-alert";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)



Vue.use(VueRouter);
Vue.use(VueSimpleAlert, { reverseButtons: true });


const routes=[
  {path:'/',component:login},
  {path:'/signup',component:signup},
  {path:'/forgetpassword',component:forgetpassword},
  {path:'/dashboard/:emailid?',component:dashboard},
  {path:'/profile',component:profile},
  {path:'/editprofile',component:editprofile},
  {path:'/editpassword',component:editpassword},
  {path:'/cart',component:cart},
  {path:'/offer',component:offer},
  {path:'/productview/:catid',component:productview},
  {path:'/productdetail/:p_id',component:productdetail},
  {path:'/pastorder',component:pastorder},
  {path:'/aboutus',component:aboutus},
  {path:'/contactus',component:contactus},
  {path:'/wishlist',component:wishlist},
  {path:'/header1',component:header1},
  {path:'/footer1',component:footer1},
]

Vue.component('login',login);
Vue.component('signup',signup);
Vue.component('forgetpassword',forgetpassword);
Vue.component('dashboard',dashboard);
Vue.component('profile',profile);
Vue.component('editprofile',editprofile);
Vue.component('editpassword',editpassword);
Vue.component('cart',cart);
Vue.component('offer',offer);
Vue.component('pastorder',pastorder);
Vue.component('aboutus',aboutus);
Vue.component('contactus',contactus);
Vue.component('productview',productview);
Vue.component('productdetail',productdetail);
Vue.component('header1',header1);
Vue.component('footer1',footer1);
Vue.component('wishlist',wishlist);

Vue.component('font-awesome-icon', FontAwesomeIcon)

const router=new VueRouter({
  routes:routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
