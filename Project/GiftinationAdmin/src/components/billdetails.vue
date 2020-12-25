<template>
  <div>
    <sidebar></sidebar>
    <div id="page-wrapper">
      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="row" id="main">
          <div style="margin-left: 15%;" class="col-sm-12 col-md-10 well" id="content">
            <md-table
              class="md-table"
              v-model="searched"
              md-sort="name"
              md-sort-order="asc"
              md-card
            >
              <md-table-toolbar>
                <div class="md-toolbar-section-start"></div>
                <div class="md-toolbar-section-end">
                  <h3>Bill_id : {{bill_id}}</h3>
                </div>

                <md-field md-clearable class="md-toolbar-section-end"></md-field>
              </md-table-toolbar>

              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell
                  md-label="Product Name"
                  md-sort-by="fk_p_name"
                  md-numeric
                >{{ item.fk_p_name}}</md-table-cell>
                <md-table-cell md-label="Ordered quantity" md-sort-by="fk_p_qty">{{ item.fk_p_qty}}</md-table-cell>
                <md-table-cell md-label="Product price" md-sort-by="fk_p_price">
                  <span>Rs. {{ item.fk_p_price }}</span>
                </md-table-cell>
                <md-table-cell md-label="Total Price" md-sort-by="o_price">
                  <span style="color:blue">Rs. {{ item.c_price}}</span>
                </md-table-cell>
              </md-table-row>
            </md-table>
            <md-table
              class="md-table"
              v-model="searched"
              md-sort="name"
              md-sort-order="asc"
              md-card
            >
              <md-table-row slot="md-table-row">
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:Black;font-size:20px;">
                    <b>Total amount(without tax)</b>
                  </span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:black;font-size:20px;">Rs. {{total}}.00</span>
                </md-table-cell>
              </md-table-row>
            </md-table>
            <md-table
              class="md-table"
              v-model="searched"
              md-sort="name"
              md-sort-order="asc"
              md-card
            >
              <md-table-row slot="md-table-row">
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:Black;font-size:20px;">
                    <b>+ SGST(9%) CGST(9%)</b>
                  </span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:black;font-size:20px;">+ {{tax}}</span>
                </md-table-cell>
              </md-table-row>
            </md-table>

            <md-table
              class="md-table"
              v-model="searched"
              md-sort="name"
              md-sort-order="asc"
              md-card
            >
              <md-table-row slot="md-table-row">
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:gray;font-size:22px;">
                    <b>Total amount(incl. GST)</b>
                  </span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:blue;"></span>
                </md-table-cell>
                <md-table-cell>
                  <span style="color:Red;font-size:22px;">Rs. {{totalp}}.00</span>
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

import billdetailclass from "../services/billdetail";

export default {
  data: function() {
    return {
      bill_id: "",
      billdetailarr: [{}],
      search: null,
      searched: [{}],
      total: 0,
      totalp: 0,
      tax: 0,
      sgst: 0,
      cgst: 0
    };
  },
  created() {
    this.bill_id = this.$route.params.bill_id;
    console.log(this.bill_id);
    billdetailclass.getallbilldetail(this.bill_id).then(doc => {
      this.searched = doc.data;
      this.billdetailarr = doc.data;

      for (let i = 0; i < this.billdetailarr.length; i++) {
        this.total += this.billdetailarr[i].c_price;
        this.sgst = this.total * 0.09;
        this.cgst = this.total * 0.09;
      }
      this.tax += this.sgst;
      this.tax += this.cgst;
      this.totalp = this.total + this.tax;
      this.totalp = this.totalp.toFixed(0);
    });
  },
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.billdetailarr, this.search);
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
}
button {
  height: 30px;
  border: none;
  background-color: lightsalmon;
}
.md-table {
  width: 72%;
  margin-left: 12%;
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
