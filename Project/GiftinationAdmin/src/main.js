import Vue from 'vue'
import App from './App.vue'
import dashboard from './components/dashboard.vue';
import product from './components/product.vue';
import addproduct from './components/addproduct.vue';
import editproduct from './components/editproduct.vue';
import category from './components/category.vue';
import addcategory from './components/addcategory.vue';
import order from './components/order.vue';
import orderdetail from './components/orderdetail.vue';
import bill from './components/bill.vue';
import billdetail from './components/billdetails.vue';

import login from './components/login.vue';
import profile from './components/profile.vue';
import editprofile from './components/editprofile.vue';
import editpassword from './components/editpassword.vue';
import VueRouter from 'vue-router';
import VueSimpleAlert from "vue-simple-alert";

import sidebar from './components/sidebar'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'beautify-scrollbar/dist/index.css'; 
import 'v2-table/dist/index.css'; 
import V2Table from 'v2-table';
var VueTruncate = require('vue-truncate-filter')
Vue.use(VueTruncate)


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

Vue.use(V2Table)
Vue.use(require('vue-moment'));
Vue.use(VueSidebarMenu)
Vue.use(VueRouter);
Vue.use(VueSimpleAlert, { reverseButtons: true });


Vue.component('dashboard',dashboard);
Vue.component('product',product);
Vue.component('addproduct',addproduct);
Vue.component('editproduct',editproduct);
Vue.component('category',category);
Vue.component('addcategory',addcategory);
Vue.component('order',order);
Vue.component('orderdetail',orderdetail);
Vue.component('bill',bill);
Vue.component('billdetail',billdetail);
Vue.component('login',login);
Vue.component('profile',profile);
Vue.component('editprofile',editprofile);
Vue.component('editpassword',editpassword);
Vue.component('sidebar',sidebar);



const routes=[
  {path:'/',component:login},
  {path:'/dashboard/:emailid?',component:dashboard},
  {path:'/product',component:product},
  {path:'/addproduct',component:addproduct},
  {path:'/editproduct/:p_id',component:editproduct},
  {path:'/category',component:category},
  {path:'/addcategory',component:addcategory},
  {path:'/order',component:order},
  {path:'/orderdetail/:o_id',component:orderdetail},
  {path:'/bill',component:bill},
  {path:'/billdetail/:bill_id',component:billdetail},
  {path:'/profile',component:profile},
  {path:'/editprofile',component:editprofile},
  {path:'/editpassword',component:editpassword},
  {path:'/sidebar',component:sidebar},
]

const router=new VueRouter({
  routes:routes
})


new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
