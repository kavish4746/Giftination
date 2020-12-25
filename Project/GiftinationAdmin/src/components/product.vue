<template>
  <div>
    <sidebar></sidebar>
    <div id="page-wrapper">
      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="row" id="main">
          <div style="margin-left: 15%;" class="col-sm-12 col-md-10 well" id="content">
            <div class="md-toolbar-section-end">
              <span class="cat">
                <b>Select Category &nbsp;</b>
              </span>
              <select @change="productbycat()" v-model="selected">
                <option
                  v-bind:value="item.cat_id"
                  v-for="item in catarr"
                  v-bind:key="item.cat_id"
                >{{item.cat_name}}</option>
              </select>
            </div>
            <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card>
              <md-table-toolbar>
                <md-field md-clearable class="md-toolbar-section-start">
                  <button @click="addproduct" class="btn btn-success btn-lg">Add Product</button>
                </md-field>

                <md-field md-clearable class="md-toolbar-section-end">
                  <md-input
                    style="border:2px solid lightgrey;"
                    placeholder=" Search by name..."
                    v-model="search"
                    @input="searchOnTable"
                  />
                </md-field>
              </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Product Image" md-sort-by="p_img">
                  <img
                    style="height:100px;width:100px;border-radius:50px;"
                    v-bind:src="'http://localhost:3000/images/products/' + item.p_img"
                  />
                </md-table-cell>
                <md-table-cell md-label="Product Name" md-sort-by="p_name">{{ item.p_name}}</md-table-cell>
                <md-table-cell md-label="Product Description" md-sort-by="p_des">{{ item.p_des}}</md-table-cell>
                <md-table-cell md-label="Product price" md-sort-by="p_price">Rs.{{ item.p_price}}</md-table-cell>
                <md-table-cell md-label="Product Stock" md-sort-by="p_qty">{{ item.p_qty}}</md-table-cell>
                <md-table-cell md-label="Buffer Stock" md-sort-by="buffer_stcok">
                  <span class="btn btn-sm btn-outline-warning">
                    <strong>{{item.buffer_stock}}</strong>
                  </span>
                </md-table-cell>

                <md-table-cell md-label="Option">
                  <router-link
                    v-bind:to="'/editproduct/' + item.p_id"
                    class="btn btn-primary"
                  >Edit</router-link>
                </md-table-cell>

                <md-table-cell md-label="Module">
                  <button
                    @click="onclickdelete(item)"
                    class="btn btn-danger"
                  >Delete</button>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.p_name).includes(toLower(term)));
  }

  return items;
};

import productclass from "../services/product";
import categoryclass from "../services/category";
export default {
  data: function() {
    return {
      p_id: "",
      productarr: [{}],
      catarr: [{}],
      search: null,
      searched: [],
      selected: ""
    };
  },
  created() {
    productclass.getallproduct().then(doc => {
      this.productarr = doc.data;

      console.log(this.productarr);
      this.searched = doc.data;
    });

    categoryclass.getallcategory().then(doc => {
      this.catarr = doc.data;
      this.catarr.splice(0, 0, {
        id: "new",
        cat_id: "",
        cat_name: "All Products"
      });
      console.log(this.catarr);
    });
  },
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.productarr, this.search);
    },
    addproduct: function() {
      this.$router.push({ path: "/addproduct" });
    },
    productbycat: function() {
      console.log(this.selected);

      if (this.selected == "") {
        productclass.getallproduct().then(doc => {
          this.productarr = doc.data;
          this.searched = doc.data;
        });
      } else {
        productclass.productbycat(this.selected).then(doc => {
          console.log(doc.data);
          this.productarr = doc.data;
          this.searched = doc.data;
        });
      }
    },
    onclickdelete: function(item) {
      productclass.deleteproduct(item.p_id).then(doc => {
        for (let i = 0; i < this.productarr.length; i++) {
          if (this.productarr[i].p_id == item.p_id) {
            this.productarr.splice(i, 1);
          }
        }

        this.$fire({
          title: "product successfully Deleted",
          type: "success",
          timer: 3000
        }).then(r => {
          console.log(r.value);
        });
      });
    }
  }
};
</script>

<style scoped>
.maindiv {
  margin-left: 10%;
}
.addprobtn {
  height: 50px;
  width: 50%;
  background-color: #bce7e5;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.md-field {
  max-width: 350px;
}

tr:hover {
  background-color: whitesmoke;
}
h2,
th,
td {
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
  font-style: fa-bold;
}

select {
  height: 25px;
  width: 15%;
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}
.cat {
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}

@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
@media (min-width: 768px) {
  body {
    margin-top: 50px;
  }
  /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/
}

#wrapper {
  padding-left: 0;
}

#page-wrapper {
  width: 100%;
  padding: 0;
  background-color: #fff;
}

@media (min-width: 768px) {
  #wrapper {
    padding-left: 225px;
  }

  #page-wrapper {
    padding: 22px 10px;
  }
}

/* Top Navigation */

.top-nav {
  padding: 0 15px;
}

.top-nav > li {
  display: inline-block;
  float: left;
}

.top-nav > li > a {
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 20px;
  color: #fff;
}

.top-nav > li > a:hover,
.top-nav > li > a:focus,
.top-nav > .open > a,
.top-nav > .open > a:hover,
.top-nav > .open > a:focus {
  color: #fff;
  background-color: #1a242f;
}

.top-nav > .open > .dropdown-menu {
  float: left;
  position: absolute;
  margin-top: 0;
  /*border: 1px solid rgba(0,0,0,.15);*/
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}

.top-nav > .open > .dropdown-menu > li > a {
  white-space: normal;
}

/* Side Navigation */

@media (min-width: 768px) {
  .side-nav {
    position: fixed;
    top: 60px;
    left: 225px;
    width: 225px;
    margin-left: -225px;
    border: none;
    border-radius: 0;
    border-top: 1px rgba(0, 0, 0, 0.5) solid;
    overflow-y: auto;
    background-color: #222;
    /*background-color: #5A6B7D;*/
    bottom: 0;
    overflow-x: hidden;
    padding-bottom: 40px;
  }

  .side-nav > li > a {
    width: 225px;
    border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
  }

  .side-nav li a:hover,
  .side-nav li a:focus {
    outline: none;
    background-color: #1a242f !important;
  }
}

.side-nav > li > ul {
  padding: 0;
  border-bottom: 1px rgba(0, 0, 0, 0.3) solid;
}

.side-nav > li > ul > li > a {
  display: block;
  padding: 10px 15px 10px 38px;
  text-decoration: none;
  /*color: #999;*/
  color: #fff;
}

.side-nav > li > ul > li > a:hover {
  color: #fff;
}

.navbar .nav > li > a > .label {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 14px;
  right: 6px;
  font-size: 10px;
  font-weight: normal;
  min-width: 15px;
  min-height: 15px;
  line-height: 1em;
  text-align: center;
  padding: 2px;
}

.navbar .nav > li > a:hover > .label {
  top: 10px;
}

.navbar-brand {
  padding: 5px 15px;
}
</style>
