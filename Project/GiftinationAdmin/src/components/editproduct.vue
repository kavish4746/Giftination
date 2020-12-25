    <template>
  <div>
    <sidebar></sidebar>
    <div class="maindiv">
      <div class="container1">
        <form id="contact">
          <h3>Update product</h3>
          <fieldset>
            <input
              placeholder="Enter Product Name"
              type="text"
              tabindex="1"
              v-model="productarr[0].p_name"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <textarea
              rows="5"
              cols="10"
              placeholder="Enter Product Description"
              type="text"
              tabindex="1"
              v-model="productarr[0].p_des"
              required
              autofocus
            ></textarea>
          </fieldset>
          <fieldset>
            <input
              placeholder="Enter Product price"
              type="number"
              tabindex="1"
              v-model="productarr[0].p_price"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Enter Product Qauntity"
              type="number"
              tabindex="1"
              v-model="productarr[0].p_qty"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <select v-model="selected">
              <option
                v-bind:value="item.cat_id"
                v-for="item in catarr"
                v-bind:key="item.cat_id"
              >{{item.cat_name}}</option>
            </select>
          </fieldset>
          <fieldset>
            <input
              placeholder="Choose Product Image"
              type="file"
              @change="getfile"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Enter Product buffer stock"
              type="number"
              tabindex="1"
              v-model="productarr[0].buffer_stock"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <button
              name="submit"
              @click="updatepro"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >update product</button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import productclass from "../services/product";
import categoryclass from "../services/category";
export default {
  data: function() {
    return {
      p_id: "",
      productarr: [
        {
          p_id: "",
          p_name: "",
          p_des: "",
          p_price: "",
          p_qty: "",
          fk_cat_id: "",
          p_img: "",
          buffer_stock: ""
        }
      ],
      catarr: [{}],
      selected: ""
    };
  },
  created() {
    this.p_id = this.$route.params.p_id;
    categoryclass.getallcategory().then(doc => {
      this.catarr = doc.data;
      this.catarr.splice(0, 0, {
        id: "new",
        cat_id: "",
        cat_name: "Select Category of product"
      });
      console.log(this.catarr);
    });

    productclass.getproductbyid(this.p_id).then(doc => {
      this.productarr = doc.data;
      console.log(this.productarr);
    });
  },
  methods: {
    updatepro: function() {
      productclass.updateproduct(this.productarr[0]).then(doc => {
        console.log(doc);
        this.$fire({
          title: "product successfully updated",
          type: "success",
          timer: 3000
        }).then(r => {
          console.log(r.value);
        });

        this.$router.push({ path: "/product" });
      });
    },
    getfile(event) {
      this.productarr[0].p_img = event.target.files[0].name;
      console.log(this.productarr[0].p_img);
    }
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
  margin: 0 auto;
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
  margin: 80px 0;
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