<template>
  <div>
    <div class="sidenav">
      <div class="login-main-text">
        <h1 class="logo" style="margin-left:45px;margin-top:20px;">GiftiNation</h1>
        <h5 style="margin-left:100px;margin-top:-10px;">one stop for shoping</h5>
      </div>
    </div>
    <div class="main" style="margin-top:-20%;"> 
      <div class="col-sm-12" >
        <div class="login-form" style="height:50%;width:85%;">
            <div><i class="fa fa-user-circle" style="margin-left:-15%;margin-top:-40%;font-size:130px;color:#ff5722;" aria-hidden="true"></i></div>
            <div style="color:lightseagreen;font-size:20px;margin-top:15px;margin-left:20px;color:#ff5722">Administration Login</div>
            <br><br>
          <form style="margin-top:2%;margin-left:10%;">
            <div class="form-group"> 
              <input
                type="email"
                v-model="email"
                size=20
                placeholder="Email"
                name="Username"
                required
                class="form-control"
              />
            </div>
            <div class="form-group">
              
              <input
                class="form-control"
                type="password"
                v-model="password"
                placeholder="Password"
                name="Password"
                required
              />
            </div>

            <input type="button" v-on:click="onlogin" style="margin-left:-7%;width:20%;" class="btn btn-black" value="Login" />
            <p style="margin-top:2%;">
              <a @click="forgetpassword" style="margin-left:-4%;">Forget your password ?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginclass from "../services/login";
export default {
  data() {
    return {
      email: "",
      password: "",
      signuparr: [{}],
      forgetemail: "",
      mail: {
        to: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    onlogin: function() {
      loginclass.getEmpByEmailPassword(this.email, this.password).then(doc => {
        if (doc.data.length > 0) {
          if (doc.data[0].u_type == "admin") {
            localStorage.setItem("emailid", this.email);
            this.$fire({
              title: "Login successfully",
              type: "success",
              timer: 3000
            }).then(r => {
            });
            this.$router.push({ path: "/dashboard/" + this.email });
          } else {
            this.$fire({
              title: "You don't have access",
              type: "warning",
              timer: 3000
            }).then(r => {
            });
          }
        } else {
          this.$fire({
            title: "EmailID and Password doesn't match ",
            type: "warning",
            timer: 3000
          }).then(r => {
          });
        }
      });
    },
    forgetpassword: function() {
      this.$prompt("Please your Emailid").then(text1 => {
        this.forgetemail = text1;
        loginclass.getpassword(this.forgetemail).then(doc => {
          this.mail.to = this.forgetemail;
          this.mail.subject = "Password Details Of your JustHandllom Account";
          this.mail.message = "Your Password is :- " + doc.data[0].u_password;
          loginclass.sendmail(this.mail).then(doc => {
          });
        });
       });
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 50%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-black {
  background-color: #000 !important;
  color: #fff;
}

.logo{
    font-family: Gill Sans Extrabold, sans-serif;
    font-size: 3em;
    color: #ff5722;   
}
</style>
