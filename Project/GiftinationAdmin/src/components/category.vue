<template>
  <div>
    <sidebar></sidebar>

    <div id="page-wrapper">
      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="row" id="main">
          <div style="margin-left: 15%;" class="col-sm-12 col-md-10 well" id="content">
            <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card>
              <md-table-toolbar>
                <div class="md-toolbar-section-start">
                  <button @click="onclickadd" class="btn btn-primary">Add Category</button>

                  <h1 class="md-title">Category List</h1>
                </div>
                <md-field md-clearable class="md-toolbar-section-end">
                  <br />
                  <md-input
                    placeholder="Search by name..."
                    v-model="search"
                    @input="searchOnTable"
                  />
                </md-field>
              </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell
                  md-label="Category ID"
                  md-sort-by="cat_id"
                  md-numeric
                >{{ item.cat_id }}</md-table-cell>
                <md-table-cell
                  md-label="Category Name"
                  md-sort-by="cat_name"
                  md-numeric
                >{{ item.cat_name }}</md-table-cell>
                <md-table-cell md-label="Delete Category" md-numeric>
                  <button type="button" @click="onclickdelete(item)" class="btn btn-danger">Delete</button>
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
    return items.filter(item => toLower(item.cat_name).includes(toLower(term)));
  }

  return items;
};

import categoryclass from "../services/category";
export default {
  data: function() {
    return {
      userarr: [],
      categoryarr: [{}],
      search: null,
      searched: [],
      catarr: [
        {
          cat_id: "",
          cat_name: ""
        }
      ],
      cnt: 0,
      flag: false,
      flag1: true,
      currentPage: 1,
      total: 198,
      loading: false,
      paginationInfo: {
        text: ""
      }
    };
  },
  created() {
    categoryclass.getallcategory().then(doc => {
      this.cnt = doc.data[doc.data.length - 1].cat_id;
      this.categoryarr = doc.data;
      this.searched = this.categoryarr;
    });
  },
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.categoryarr, this.search);
    },
    onclickmaindiv: function() {
      this.flag1 = true;
    },
    onclickadd: function() {
      this.flag = !this.flag;
      this.flag1 = !this.flag1;

      this.$prompt("Please Enter Category Name").then(text1 => {
        this.catarr[0].cat_name = text1;
        this.catarr[0].cat_id = this.cnt + 1;
        categoryclass.addcat(this.catarr[0]).then(doc => {
          this.$fire({
            title: "Category successfully added",
            type: "success",
            timer: 3000
          }).then(r => {});
        });
      });
    },
    addcat: function() {
      this.flag = !this.flag;
      this.flag1 = !this.flag1;
    },
    onclickdelete: function(item) {
      categoryclass.deletecat(item.cat_id).then(doc => {
        for (let i = 0; i < this.categoryarr.length; i++) {
          if (this.categoryarr[i].cat_id == item.cat_id) {
            this.categoryarr.splice(i, 1);
          }
        }

        this.$fire({
          title: "category successfully Deleted",
          type: "success",
          timer: 3000
        }).then(r => {});
      });
    }
  }
};
</script>


<style scoped>
tr:hover {
  background-color: #bce7e5;
}
.md-field {
  max-width: 350px;
}
.md-table {
  width: 60%;
  margin-left: 20%;
  background-color: white;
}
.md-title {
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  color: black;
  left: 0px;
}
.md-label {
  text-align: center;
}
.md-input {
  border: 1px black;
  border-bottom: 1px solid black;
}
.maindiv {
  margin-left: 15%;
}
.button1 {
  display: block;
  position: relative;
  width: 21%;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  background-color: #8fd8d4;
  border-radius: 5px;
  border: none;
  margin-top: 2%;
  font-size: 22px;
  margin-left: 20%;
  font-family: "Times New Roman", Times, serif;
}
.button1:hover {
  background-color: #198e88;
}

td {
  font-size: 20px;
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