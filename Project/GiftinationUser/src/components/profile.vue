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
       <div class="container-fluid user-profile">
  <div class="row">
    <div class="col-sm-12">
      <div class="well well-sm">
        <div class="user-profile-card">
          <div class="user-profile-header">
          </div>
          <div class="user-profile-avatar text-center">
            <img alt="" src="../images/user.png">
          </div>
          <div class="row">
            <div class="text-center col-sm-12">
              <h1>{{infoarr[0].u_name}}</h1>
              <br>
              <hr>
            </div>
            <div class="panel-footer col-sm-12"></div>
            <div class="container">
              <p>
                <small class="size">Email</small>
                <strong class="size">{{infoarr[0].u_email}}</strong>
              </p>
              <p>
                <small class="size">Address Details</small>
                <strong class="size">{{infoarr[0].u_address}}</strong>
              </p>
              <p>
                <small class="size">Contact </small>
                <strong class="size">{{infoarr[0].u_mob}}</strong>
              </p>
            </div>

          </div>
          <hr>
          <div>
            <router-link to="/editprofile"><button style="margin-left:30%;" class="btn1">Edit Profile</button></router-link>
            <router-link to="/editpassword"><button style="margin-left:20px;" class="btn2">Edit Password</button></router-link>
          </div>
          <hr>
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
import infoclass from '../service/profile'
export default {
  name: 'app',
  data () {
    return {
      infoarr:[],

    }
  },
  methods:{

  },
  created(){
    infoclass.getEmpdetails(localStorage.getItem('emailid')).then(doc=>{
      this.infoarr=doc.data;
      console.log(this.infoarr);
      console.log(localStorage.getItem('emailid'));
    })
  }
}
</script>

<style scoped>
/* @import '../css/profile.css'; */
button
{
  height: 35px;
  width:20%;
  background-color: lightseagreen;
  font-size:20px;
  font-family: 'Times New Roman', Times, serif;
}
button:hover{
  background-color: #42ddd4;
}
h1
{
  font-family: 'Times New Roman', Times, serif;
  color:lightseagreen;
}
.user-profile-card .user-profile-header {
  background-color: whitesmoke;
  background-size: cover;
  height: 200px;
}

.user-profile-card .user-profile-avatar {
  position: relative;
  top: -150px;
  margin-bottom: -100px;
  padding: 0 15px;
}

.user-profile-card .user-profile-avatar img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.5);
}

.user-profile small {
  display: block;
  line-height: 1.428571429;
  color: #999;
}
.text-center{
  text-align: center;
}

.size{
  font-size:20px;
}
.colorofsmall
{
   color:lightseagreen;
}
</style>
