<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="../images/img-02.png" alt="login image" class="login-img">
        </div>

        <div class="col-sm-6 login-section-wrapper">
          <div class="brand-wrapper">
            <img src="assets/images/logo.svg" alt="logo" class="logo">
          </div>
          <div class="login-wrapper my-auto">
            <h1 class="login-title">Forget Password</h1>
            <form action="#!">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="email" name="email" id="email" class="form-control" placeholder="Enter your Registered email here !!">
              </div>
              <input name="submit" id="submit" v-on:click="onsubmit" class="btn btn-block login-btn" type="button" value="Recover Your Password">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      email:"",
      password:"",
    }
  },
  methods:{
      onlogin:function(){
          if(this.email=="kavishshah84@gmail.com" && this.password=="kavishshah")
          {
              console.log("login successful");
          }
          else
          {
              alert("Username and password Wrong");
          }
      }
  }
}
</script>

<style scoped>
body 
{
  font-family: "Karla", sans-serif;
  background-color:whitesmoke;
  min-height: 100vh;
}

.brand-wrapper .logo
{
    height: 25px;
}

.login-section-wrapper
{
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  padding: 68px 100px;
  background-color: whitesmoke; 
}
@media (max-width: 991px)
{
    .login-section-wrapper
     {
      padding-left: 50px;
      padding-right: 50px;
     } 
}
@media (max-width: 575px)
{
    .login-section-wrapper {
      min-height: 100vh; } 
}

.login-wrapper
{
  width: 300px;
  max-width: 100%;
}
@media (max-width: 575px) 
{
    .login-wrapper {
      width: 100%; } 
}
  .login-wrapper label {
    font-size: 14px;
    font-weight: bold;
    color: #b0adad; }
  .login-wrapper .form-control {
    border: none;
    border-bottom: 1px solid #e7e7e7;
    border-radius: 0;
    padding: 9px 5px;
    min-height: 40px;
    font-size: 18px;
    font-weight: normal; }
    .login-wrapper .form-control::-webkit-input-placeholder {
      color: #b0adad; }
    .login-wrapper .form-control::-moz-placeholder {
      color: #b0adad; }
    .login-wrapper .form-control:-ms-input-placeholder {
      color: #b0adad; }
    .login-wrapper .form-control::-ms-input-placeholder {
      color: #b0adad; }
    .login-wrapper .form-control::placeholder {
      color: #b0adad; }
  .login-wrapper .login-btn {
    padding: 13px 20px;
    background-color:cyan;
    border-radius: 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 14px; }
    .login-wrapper .login-btn:hover {
      border: 1px solid #fdbb28;
      background-color: #fff;
      color: #fdbb28; }
  .login-wrapper a.forgot-password-link {
    color: #080808;
    font-size: 14px;
    text-decoration: underline;
    display: inline-block;
    margin-bottom: 54px; }
    @media (max-width: 575px)
     {
      .login-wrapper a.forgot-password-link {
        margin-bottom: 16px; } 
        }
  .login-wrapper-footer-text
   {
    font-size: 16px;
    color: #000;
    margin-bottom: 0;
     }

.login-title {
  font-size: 30px;
  color: #000;
  font-weight: bold;
  margin-bottom: 25px; }

.login-img {
  width: 100%;
  height: 100vh;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: left;
     object-position: left; 
}
@import '../css/css/style.css';
@import '../css/css/form-elements.css';
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';

</style>
