<template>
    <div>
        <sidebar></sidebar>
         <div id="page-wrapper">
        <div class="container-fluid">
            <!-- Page Heading -->
            <div class="row" id="main">
                <div class="col-md-2"></div>
                <div class="col-md-4">
                                <div class="card">
                                <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card>

                                  <md-table-toolbar>
                                        <div class="md-toolbar-section-start">
                                            <h1 class="md-title">Please fill below items</h1>
                                        </div>
                                  </md-table-toolbar>

                                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                                        <md-table-cell md-label="Product Name" md-sort-by="p_name" >{{ item.p_name}}</md-table-cell>
                                        <md-table-cell md-label="Product Quantity" md-sort-by="p_qty">{{ item.p_qty}}</md-table-cell>
                                        <md-table-cell md-label="Buffer_Stock" md-sort-by="p_qty">{{ item.buffer_stock}}</md-table-cell>
                                    </md-table-row>
                                    </md-table>

                                </div>
                         </div>

                            <div class="col-md-6">
                                <div class="card">
                                        <md-table v-model="searched1" md-sort="name" md-sort-order="asc" md-card>

                                  <md-table-toolbar>
                                        <div class="md-toolbar-section-start">
                                            <h1 class="md-title">Pending Order List</h1>
                                        </div>
                                  </md-table-toolbar>

                                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                                        <md-table-cell md-label="User Email" md-sort-by="fk_emailid">{{item.fk_emailid}}</md-table-cell>
                                        <md-table-cell md-label="Date of order" md-sort-by="o_date" >{{item.o_date | date}}</md-table-cell>
                                        <md-table-cell md-label="Amount" md-sort-by="o_price">&#8377;{{item.o_price}}</md-table-cell>
                                    </md-table-row>
                                    </md-table>

                                </div>
                            </div>

                    </div>
            <hr>
            <br>

                        <div class="row" id="main">
                            <div class="col-md-2"></div>
                            <div class="col-md-10">
                                <div class="card">
                                <md-table v-model="searched2" md-sort="name" md-sort-order="asc" md-card>

                                  <md-table-toolbar>

                                        <div class="md-toolbar-section-start">
                                            <h1 class="md-title">Queries from customer</h1>
                                        </div>
                                  </md-table-toolbar>

                                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                                        <md-table-cell md-label="User name" md-sort-by="user_name" md-numeric>{{ item.user_name}}</md-table-cell>
                                        <md-table-cell md-label="User EmailID" md-sort-by="user_emailid" md-numeric >{{ item.user_emailid}}</md-table-cell>
                                        <md-table-cell md-label="user Message" md-sort-by="user_message" md-numeric>{{ item.user_message}}</md-table-cell>
                                        <md-table-cell md-label="Direct Mail" md-sort-by="" md-numeric><span style="color:blue;cursor:pointer">Email</span></md-table-cell>

                                    </md-table-row>
                                    </md-table>
                                </div>
                            </div>
                        </div>
                        <br><br>
                            <div class="row" id="main">
                            <div class="col-md-2"></div>
                            <div class="col-md-10">
                                <div class="card">
                                <md-table v-model="searched3" md-sort="name" md-sort-order="asc" md-card>

                                  <md-table-toolbar>

                                        <div class="md-toolbar-section-start">
                                            <h1 class="md-title">User Information</h1>
                                        </div>
                                  </md-table-toolbar>

                                  <md-table-row v-if="item.u_type!='admin'" slot="md-table-row" slot-scope="{ item }">
                                        <md-table-cell md-label="User name" md-sort-by="user_name" md-numeric>{{ item.u_name}}</md-table-cell>
                                        <md-table-cell md-label="User EmailID" md-sort-by="user_emailid" md-numeric >{{ item.u_email}}</md-table-cell>
                                        <md-table-cell md-label="User Mobile" md-sort-by="user_message" md-numeric>{{ item.u_mob}}</md-table-cell>
                                        <md-table-cell md-label="User Address" md-sort-by="user_message" md-numeric>{{ item.u_address}}</md-table-cell>
                                    </md-table-row>
                                    </md-table>
                                </div>
                            </div>
                        </div>
                        <br>

        </div>
    </div>
    </div>

</template>


<script>
import dashboardclass from '../services/dashboard'
export default {
    data:function(){
        return{
            userarr:[],
            buffferstockarr:[{}],
            pendingorderarr:[{}],
            contactarr:[{}],
            searched: [],
            searched1: [],
            searched2: [],
            searched3:[],
            slen:'',
            slen1:'',
            slen2:'',
            currentPage: 1,
            total:0,
            loading: false,
            paginationInfo: {
            text: ''
            },
        }
    },
    created(){
        dashboardclass.getalluser().then(doc=>{
            this.userarr=doc.data;
            this.total=this.userarr.length;
            this.searched3 = doc.data;
        })

        dashboardclass.getallcontactmsg().then(doc=>{
            this.contactarr=doc.data;
            this.searched2=doc.data;
            this.slen2=this.searched2.length;
        })

        dashboardclass.getbufferstock().then(doc=>{
            console.log(doc);
            this.bufferstockarr=doc.data;
            this.searched=doc.data;
            this.slen=this.searched.length;
        })

        dashboardclass.getallpendingorder().then(doc=>{
            this.pendingorderarr=doc.data;
            this.searched1=doc.data;
            this.slen1=this.searched1.length;
        })
    },
    methods: {
      handlePageChange(page) {
        this.currentPage = page;
        this.loading = true;
        let start = this.userarr.length;

        const arr = this.userarr.map(item => {
          return Object.assign({}, item, {
            u_name: item.u_name,
          });
        });

        setTimeout(() => {
          this.loading = false;
          this.userarr = [].concat(arr);
        }, 2000);
      },
      handleSortChange( {prop, order}) {
        // Customize your sorting method. Maybe it will get data from server.
        this.loading = true;
        let arr = [].concat(this.userarr);
        arr.sort((item1, item2) => {
          let val1 = '';
          let val2 = '';


          if (prop === 'u_name') {
            val1 = item1[prop];
            val2 = item2[prop]
            if (order === 'descending') {
              return val2 < val1 ? -1 : 1
            }
            return val1 < val2 ? -1 : 1
          }
        });
        setTimeout (() => {
          this.loading = false;
          this.userarr = [].concat(arr);
        }, 2000);
      }
    }
}
</script>


<style scoped>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
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
</style>
