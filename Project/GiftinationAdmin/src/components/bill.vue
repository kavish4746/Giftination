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
                  <h3>&nbsp;Bill Data</h3>
                </div>

                <md-field md-clearable class="md-toolbar-section-end">
                  <md-input
                    style="border:2px solid lightgrey;"
                    placeholder=" Search by user email..."
                    v-model="search"
                    @input="searchOnTable"
                  />
                </md-field>
              </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell
                  md-label="User Email_Id"
                  md-sort-by="fk_email_id"
                >{{ item.fk_emailid}}</md-table-cell>
                <md-table-cell
                  md-label="Billing Date"
                  md-sort-by="o_date"
                >{{ item.o_date | moment("Do MMMM YYYY")}}</md-table-cell>
                <md-table-cell md-label="Bill amount" md-sort-by="o_price">
                  <span>Rs. {{ item.o_price}}</span>
                </md-table-cell>
                <md-table-cell
                  md-label="Billing Address"
                  md-sort-by="fk_address"
                >{{ item.fk_address}}</md-table-cell>

                <md-table-cell md-label="Option">
                  <router-link
                    v-bind:to="'/billdetail/' + item.bill_id"
                    class="btn btn-success"
                  >Bill products detail</router-link>
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
    return items.filter(item =>
      toLower(item.fk_emailid).includes(toLower(term))
    );
  }

  return items;
};

import billclass from "../services/bill";
import billdetailclass from "../services/billdetail";

export default {
  data: function() {
    return {
      o_id: "",
      orderarr: [{}],
      search: null,
      searched: [],
      billarr: [{}]
    };
  },
  created() {
    billclass.getallbill().then(doc => {
      this.billarr = doc.data;
      this.searched = doc.data;
    });
  },
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.billarr, this.search);
    }
  }
};
</script>

<style scoped>
.maindiv {
  margin-left: 10%;
}
.md-field {
  max-width: 350px;
}

tr:hover {
  background-color: f1f1f1;
}
h2,
td {
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
  font-style: fa-bold;
}
button {
  height: 30px;
  border: none;
  background-color: lightsalmon;
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
