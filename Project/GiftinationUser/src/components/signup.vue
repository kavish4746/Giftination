<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 loginmain">
          <div class="logindiv my-auto">
            <span class="login-title"><b>GiftiNation</b></span>
            <form action="#!">
              <div class="form-group">
                <label>Name</label>
                <input autocomplete="off" @input="onname" type="text" v-model="signuparr[0].u_name" id="name" class="form-control" placeholder="Enter your name">
                 <div v-show="nameflag" id="nameerror" class="error-message"></div>
               </div>
              <div class="form-group mb-4">
                <label>Email</label>
                <input autocomplete="off" @input="onemail" type="email" v-model="signuparr[0].u_email" name="email" id="email" class="form-control" placeholder="Enter your email">
                 <div v-show="emailflag" id="emailerror" class="error-message"></div>
              </div>
              <div class="form-group mb-4">
                <label>Password</label>
                <input maxlength="15" autocomplete="off" @input="onpassword" type="password" v-model="signuparr[0].u_password" name="password" id="password" class="form-control" placeholder="Enter your password">
                <div v-show="passwordflag" id="passworderror" class="error-message"></div>
              </div>
              <div class="form-group mb-4">
                <label>Address</label>
                <textarea @input="onaddress" v-model="signuparr[0].u_address" name="address" id="address" rows="3" cols="30" class="form-control" placeholder="Enter your address"></textarea>
                <div v-show="addressflag" id="addresserror" class="error-message"></div>
              </div>
              <div class="form-group mb-4">
                <label>Mobile No.</label>
                <input maxlength="10" autocomplete="off" @input="onmobile" type="tel" v-model="signuparr[0].u_mob" name="mobile" id="mobile" class="js-input-mobile form-control" placeholder="Enter your mobile no">
                <div v-show="mobileflag" id="mobileerror" class="error-message"></div>
              </div>

              <input name="Register" id="register" v-on:click="signup" class="btn btn-block login-btn" type="button" value="Register">
            </form>
          </div>
        </div>
        <div class="col-sm-8 px-0 d-none d-sm-block">
          <img src="../images/giftbackground.jpg" alt="login image" class="login-img">
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import signupclass from '../service/signup'
export default {
  data () {
    return {
      signuparr:[{
        u_email:"",
        u_password:"",
        u_name:"",
        u_address:"",
        u_mob:'',
        u_type:"user"
      }],
      nameflag:false,
      emailflag:false,
      passwordflag:false,
      addressflag:false,
      mobileflag:false,
    }
  },
  methods:{
    signup:function(){
      if(this.signuparr[0].u_name == ""){
        this.nameflag = true;
        document.getElementById("nameerror").innerHTML = "Please enter a name";
      }
      else if(this.signuparr[0].u_email == ""){
        this.emailflag = true;
        document.getElementById("emailerror").innerHTML = "Please enter a email";
      }
      else if (
       !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.signuparr[0].u_email
        ))
      ){
        this.emailflag = true;
        document.getElementById("emailerror").innerHTML = "Please enter a valid email";
      }
      else if(this.signuparr[0].u_password == ""){
        this.passwordflag = true;
        document.getElementById("passworderror").innerHTML = "Please enter a password";
      }
      else if(this.signuparr[0].u_password.length < 5){
        this.passwordflag = true;
        document.getElementById("passworderror").innerHTML = "password length must be of 5-15";
      }
      else if(this.signuparr[0].u_address == ""){
        this.addressflag = true;
        document.getElementById("addresserror").innerHTML = "Please enter a address";
      }
      else if(this.signuparr[0].u_mob == ""){
        this.mobileflag = true;
        document.getElementById("mobileerror").innerHTML = "Please enter a mobile no";
      }
      else if(this.signuparr[0].u_mob.length != 10){
        this.mobileflag = true;
        document.getElementById("mobileerror").innerHTML = "Please enter a valid mobile no";
      }
      else{
      signupclass.adduser(this.signuparr[0]).then(doc=>{
        console.log(doc);


                  this.$fire({
											title: "Successfully Registered",
											type: "success",
											timer: 3000
										}).then(r => {
											console.log(r.value);
                    });
              this.$router.push({path:"/"});
      })
      }
    },
    onname:function(){
      this.nameflag = false;
      document.getElementById("nameerror").innerHTML = "";
    },
    onemail:function(){
      this.emailflag = false;
      document.getElementById("emailerror").innerHTML = "";
    },
    onpassword:function(){
      this.passwordflag = false;
      document.getElementById("passworderror").innerHTML = "";
    },
    onaddress:function(){
      this.addressflag = false;
      document.getElementById("addresserror").innerHTML = "";
    },
     onKeydown (event) {
    	const char = String.fromCharCode(event.keyCode)
      if((event.keyCode>=186 || event.keycode<=192) || (event.keycode>=219 && event.keycode<=222))
      {
        event.preventDefault()
      }
      if((event.keyCode>=97 || event.keycode<=105))
      {
        event.preventDefault()
      }
    	if (/[0-9]/.test(char)) {
      	event.preventDefault()
      }
    },
    onmobile:function(){
       $('body').on('keyup', '.js-input-mobile', function () {
    var $input = $(this),
        value = $input.val(),
        length = value.length,
        inputCharacter = parseInt(value.slice(-1));

    if (!((length > 0 && inputCharacter >= 0 && inputCharacter <= 10) || (length === 1 && inputCharacter >= 7 && inputCharacter <= 10))) {
        $input.val(value.substring(0, length - 1));
     }
    });
          this.mobileflag = false;
          document.getElementById("mobileerror").innerHTML = "";

    },


  }
}
</script>

<style scoped>

.error-message {
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
}


.link
{
  color:blue;
  cursor: pointer;
}

.linkcolor{
  color:blue;
}
.loginmain
{
  display: flex;
  flex-direction: column;
  padding:30px;
  background-color:whitesmoke;
}
@media (max-width: 991px)
{
    .loginmain
     {
      padding-left: 50px;
      padding-right: 50px;
     }
}
@media (max-width: 575px)
{
    .loginmain {
      min-height: 100vh; }
}

.logindiv
{
  width: 300px;
  max-width: 100%;
}
@media (max-width: 575px)
{
    .logindiv {
      width: 100%; }
}
.logindiv label
{
    font-size: 14px;
    font-weight: bold;
    color: #b0adad;

}

.logindiv .login-btn
{
      padding: 13px 20px;
    background-color:#ff5722;
    border-radius: 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 14px;
}
.logindiv .login-btn:hover
{
      border: 1px solid lightsalmon;
      background-color: lightsalmon;
      color: whitesmoke;
}

.login-title
{
font-family: 'Dancing Script', cursive;
    font-size: 4em;
    color: #ff5722;
}

.login-img
{
  width: 100%;
  height: 100vh;
}

</style>
