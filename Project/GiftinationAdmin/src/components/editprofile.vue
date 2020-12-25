    <template>
  <div>
    <sidebar></sidebar>
    <br>
    <div class="maindiv">
      <div class="container1">
        <form id="contact">
          <h3>Update profile</h3>
          <fieldset>
            <input type="text" tabindex="1" v-model="infoarr[0].u_name" required autofocus />
          </fieldset>
          <fieldset>
            <input type="email" tabindex="1" v-model="infoarr[0].u_email" required autofocus />
          </fieldset>
          <fieldset>
            <textarea
              rows="5"
              cols="10"
              type="text"
              tabindex="1"
              v-model="infoarr[0].u_address"
              required
              autofocus
            ></textarea>
          </fieldset>
          <fieldset>
            <input type="text" tabindex="1" v-model="infoarr[0].u_city" required autofocus />
          </fieldset>
          <fieldset>
            <input type="text" tabindex="1" v-model="infoarr[0].u_state" required autofocus />
          </fieldset>
          <fieldset>
            <input type="number" tabindex="1" v-model="infoarr[0].u_mno" required autofocus />
          </fieldset>
          <fieldset>
            <button
              name="submit"
              @click="update"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >update profile</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import infoclass from "../services/profile";
export default {
  name: "app",
  data() {
    return {
      infoarr: []
    };
  },
  methods: {
    update: function() {
      infoclass.updateinfodetails(this.infoarr).then(doc => {
        console.log(doc);
        this.$fire({
          title: "profile successfully updated",
          type: "success",
          timer: 3000
        }).then(r => {
          console.log(r.value);
        });

        this.$router.push({ path: "/profile" });
      });
    }
  },
  created() {
    infoclass.getEmpdetails(localStorage.getItem("emailid")).then(doc => {
      this.infoarr = doc.data;
      console.log(this.infoarr);
      console.log(localStorage.getItem("emailid"));
    });
  }
};
</script>
<style scoped>
@import url(
  https://fonts.googleapis.com/css?family=Open+Sans:400italic,
  400,
  300,
  600
);

.container1 {
  max-width: 800px;
  width: 100%;
  margin: auto;
  position: relative;
  background-color: lightgray;
}
h3 {
  font-style: serif;
}
#contact input[type="text"],
input[type="number"],
select,
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Open Sans", Helvetica, Arial, sans-serif;
}

#contact {
  background: fade(#f9f9f9, 85);
  padding: 25px;
}

#contact h3 {
  color: #000;
  display: block;
  font-size: 30px;
  font-weight: 400;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
input[type="number"],
select,
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
input[type="number"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #000;
  color: #fff;
  margin: 0 0 5px;
  padding: 25px 10px;
  font-size: 15px;
  text-transform: uppercase;
}

#contact button[type="submit"]:hover {
  background: #09c;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #999;
}
::-webkit-input-placeholder {
  color: #888;
}
:-moz-placeholder {
  color: #888;
}
::-moz-placeholder {
  color: #888;
}
:-ms-input-placeholder {
  color: #888;
}

label.error {
  color: darkred;
  padding-left: 10px;
  font-weight: bold;
}
input.error {
  border-color: darkred !important;
}
</style>