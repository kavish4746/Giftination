<template>
  <div>
    <sidebar></sidebar>
    <div id="page-wrapper">
      <div class="container-fluid">
        <!-- Page Heading -->
        <div class="row" id="main" >
             <div style="margin-left: 15%;" class="col-sm-12 col-md-10 well" id="content">
            <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card>
              <md-table-toolbar>
                <div class="md-toolbar-section-start">
                  <button @click="onclickall" class="btn btn-primary">
                    <b style="color: black;">All Orders</b>
                  </button>&nbsp;&nbsp;
                  <button @click="onclickpending" class="btn btn-danger">
                    <b style="color: black;">Pending Orders</b>
                  </button>&nbsp;&nbsp;
                  <button @click="onclickcompleted" class="btn btn-success">
                    <b style="color: black;">Completed orders</b>
                  </button>&nbsp;&nbsp;
                </div>

                <md-field md-clearable class="md-toolbar-section-end">
                  <md-input
                    style="border:1px solid lightgrey;"
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
                  md-label="Order Date"
                  md-sort-by="o_date"
                >{{ item.o_date | moment("Do MMMM YYYY")}}</md-table-cell>
                <md-table-cell md-label="Order amount" md-sort-by="o_price">
                  <span style="color:blue">Rs. {{ item.o_price}}</span>
                </md-table-cell>
                <md-table-cell md-label="Address" md-sort-by="fk_address">{{ item.fk_address}}</md-table-cell>
                <md-table-cell md-label="Status" v-if="item.status=='pending'" md-sort-by="status">
                  <button @click="onclickstatus(item)" style="border:none;background-color:white;">
                    <span style="color:red;text-transform: uppercase;">{{ item.status}}</span>
                  </button>
                </md-table-cell>
                <md-table-cell
                  md-label="Status"
                  v-if="item.status=='done'"
                  style="text-transform: uppercase;"
                  md-sort-by="status"
                >
                  <span style="color:green;">{{ item.status}}</span>
                </md-table-cell>
                <md-table-cell md-label="Option">
                  <router-link
                    v-bind:to="'/orderdetail/' + item.o_id"
                    class="btn btn-sm btn-outline-success"
                  style="font-size: 15px;">Order detail</router-link>
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

import orderclass from "../services/order";
import suborderclass from "../services/suborder";
import productclass from "../services/product";
import billclass from "../services/bill";
import billdetailclass from "../services/billdetail";
export default {
  data: function() {
    return {
      o_id: "",
      orderarr: [{}],
      search: null,
      searched: [],
      billarr: [
        {
          bill_id: "",
          o_price: "",
          o_date: "",
          fk_emailid: "",
          fk_address: ""
        }
      ],
      billdetailarr: [{}]
    };
  },
  created() {
    orderclass.getallorders().then(doc => {
      this.orderarr = doc.data;
      this.searched = doc.data;
    });
  },
  methods: {
    searchOnTable() {
      this.searched = searchByName(this.orderarr, this.search);
    },
    onclickpending: function() {
      orderclass.getorderbystatus("pending").then(doc => {
        this.orderarr = doc.data;
        this.searched = doc.data;
      });
    },
    onclickcompleted: function() {
      orderclass.getorderbystatus("done").then(doc => {
        this.orderarr = doc.data;
        this.searched = doc.data;
      });
    },
    onclickall: function() {
      orderclass.getallorders().then(doc => {
        this.orderarr = doc.data;
        this.searched = doc.data;
      });
    },
    onclickstatus: function(item) {
      console.log(item);
      item.status = "done";
      console.log(item);
      orderclass.updateorderstatus(item).then(doc => {
        console.log(doc);
        this.billarr[0].bill_id = Math.random() * 100;
        this.billarr[0].o_price = item.o_price;
        this.billarr[0].o_date = item.o_date;
        this.billarr[0].fk_emailid = item.fk_emailid;
        this.billarr[0].fk_address = item.fk_address;
        console.log(this.billarr[0]);
        billclass.addbill(this.billarr[0]).then(billdoc => {
          console.log(billdoc);

          suborderclass.getallsuborders(item.o_id).then(suborderdoc => {
            for (let i = 0; i < suborderdoc.data.length; i++) {
              productclass
                .getproductbyid(suborderdoc.data[i].fk_p_id)
                .then(prod => {
                  console.log("Product data" + prod);
                  prod.data[0].p_qty -= suborderdoc.data[i].fk_p_qty;
                  productclass.updateproduct(prod.data[0]).then(produpdate => {
                    console.log("Product update data" + produpdate.data);
                  }); //produpdate
                }); //prod

              console.log(suborderdoc.data[i]);
              this.billdetailarr[i] = {
                fk_bill_id: this.billarr[0].bill_id,
                fk_p_id: suborderdoc.data[i].fk_p_id,
                fk_p_name: suborderdoc.data[i].fk_p_name,
                fk_p_qty: suborderdoc.data[i].fk_p_qty,
                fk_p_price: suborderdoc.data[i].fk_p_price,
                c_price: suborderdoc.data[i].c_price
              };
              console.log(this.billdetailarr[i]);
              billdetailclass
                .addbilldetail(this.billdetailarr[i])
                .then(billdetaildoc => {
                  console.log(billdetaildoc);
                }); //billdetail
            } //loop
          }); //suborder
        }); //billadd
      });
    }
  }
};
</script>

<style scoped>@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
@media(min-width:768px) {
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

@media(min-width:768px) {
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

.top-nav>li {
    display: inline-block;
    float: left;
}

.top-nav>li>a {
    padding-top: 20px;
    padding-bottom: 20px;
    line-height: 20px;
    color: #fff;
}

.top-nav>li>a:hover,
.top-nav>li>a:focus,
.top-nav>.open>a,
.top-nav>.open>a:hover,
.top-nav>.open>a:focus {
    color: #fff;
    background-color: #1a242f;
}

.top-nav>.open>.dropdown-menu {
    float: left;
    position: absolute;
    margin-top: 0;
    /*border: 1px solid rgba(0,0,0,.15);*/
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
}

.top-nav>.open>.dropdown-menu>li>a {
    white-space: normal;
}

/* Side Navigation */

@media(min-width:768px) {
    .side-nav {
        position: fixed;
        top: 60px;
        left: 225px;
        width: 225px;
        margin-left: -225px;
        border: none;
        border-radius: 0;
        border-top: 1px rgba(0,0,0,.5) solid;
        overflow-y: auto;
        background-color: #222;
        /*background-color: #5A6B7D;*/
        bottom: 0;
        overflow-x: hidden;
        padding-bottom: 40px;
    }

    .side-nav>li>a {
        width: 225px;
        border-bottom: 1px rgba(0,0,0,.3) solid;
    }

    .side-nav li a:hover,
    .side-nav li a:focus {
        outline: none;
        background-color: #1a242f !important;
    }
}

.side-nav>li>ul {
    padding: 0;
    border-bottom: 1px rgba(0,0,0,.3) solid;
}

.side-nav>li>ul>li>a {
    display: block;
    padding: 10px 15px 10px 38px;
    text-decoration: none;
    /*color: #999;*/
    color: #fff;    
}

.side-nav>li>ul>li>a:hover {
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
  line-height: 1.0em;
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
