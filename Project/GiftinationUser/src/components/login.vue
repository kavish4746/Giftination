<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 loginmain">
          <span class="login-title"><b>GiftiNation</b></span>
          <div class="logindiv my-auto">
            
            <form action="#!">
              <div class="form-group">
                <label for="email">Email</label>
                <input @input="onemail" type="email" autocomplete="off" v-model="email" name="email" id="email" class="form-control" placeholder="Enter your email here !!">
                <div v-show="emailflag" id="emailerror" class="error-message"></div>
              </div>
              <div class="form-group mb-4">
                <label for="password">Password</label>
                <input maxlength="15" @input="onpassword" type="password" v-model="password" name="password" id="password" class="form-control" placeholder="Enter your passsword">
                <div v-show="passwordflag" id="passworderror" class="error-message"></div>
              </div>
              <input name="login" id="login" v-on:click="onlogin" class="btn btn-block login-btn" type="button" value="Login">
            </form>
            <a @click="forgetpassword" class="link"><span class="linkcolor">Forgot password?</span></a>
            <p>Don't have an account? <a class="link" @click="signup"><span class="linkcolor">Register Now....</span></a></p>
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
import loginclass from '../service/login'
export default {

  data () {
    return {
      email:"",
      password:"",
      signuparr:[{}],
      forgetemail:'',
      mail:{
        to:'',
        subject:'',
        message:'',
      },
      emailflag:false,
      passwordflag:false
    }
  },
  methods:{
      onlogin:function(){
        if(this.email == ""){
          this.emailflag = true;
          document.getElementById("emailerror").innerHTML = "Please enter a email";
        }
        else if(this.password == ""){
          this.passwordflag = true;
          document.getElementById("passworderror").innerHTML = "Please enter a password";
        }
        else{
          loginclass.getEmpByEmailPassword(this.email,this.password).then(doc=>{
            if(doc.data.length>0)
            {
                console.log(doc.data);
                localStorage.setItem('emailid',this.email);
                console.log(localStorage.getItem('emailid'))
                this.$fire({
											title: "Login successful",
											type: "success",
											timer: 3000
										}).then(r => {
											console.log(r.value);
										});
                this.$router.push({path:'/dashboard/' + this.email});
            }
            else
            {
                    this.$fire({
											title: "Emailid and password doesn't match",
											type: "warning",
											timer: 3000
										}).then(r => {
											console.log(r.value);
										});
            }
          })
        }
      },
      forgetpassword:function(){
        this.$prompt("Please your Emailid").then((text1) => {
            this.forgetemail=text1;
                  loginclass.getpassword(this.forgetemail).then(doc=>{
                      if(doc.data.length>0)
                      {
                          console.log(doc.data[0].u_password);
                          this.mail.to=this.forgetemail;
                          this.mail.subject="Password Details Of your JustHandllom Account";
                          this.mail.message="Your Password is :- "+doc.data[0].u_password;
                          loginclass.sendmail(this.mail).then(doc=>{
                            console.log(doc);
                            this.$fire({
                                  title: "Password Details successfully send to your mail",
                                  type: "success",
                                  timer: 3000
                                }).then(r => {
                                  console.log(r.value);
                                });
                          })
                      }
                      else
                      {
                            this.$fire({
                                  title: "You are not registered with us ....Signup now",
                                  type: "warning",
                                  timer: 3000
                                }).then(r => {
                                  console.log(r.value);
                                });
                      }
                })

                console.log(this.forgetemail);

        });
      },
      signup:function(){
        this.$router.push({path:"/signup"});
      },
      onemail:function(){
        this.emailflag = false;
        document.getElementById("emailerror").innerHTML = "";
      },
      onpassword:function(){
        this.passwordflag = false;
        document.getElementById("passworderror").innerHTML = "";
      }
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


.logo
{
    height: 25px;
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
  padding:50px;
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
