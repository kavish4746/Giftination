<template>
  <div>
     <html>
    <head>
      <title>Fashion</title>
      <link rel="stylesheet" href="home.css" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <header>
        <header1></header1>
      </header>
       <div class="container">
      <div v-if="cartarr.length==0">
        <img src="../images/emptycart.jpg" style="width:60%;margin-left:20%;" />
        <router-link to="/dashboard">
          <button
            style="width:30%;margin-left:-45%;margin-top:40%;"
            class="btn btn-sm btn-outline-success"
          >Continue Shopping</button>
        </router-link>
      </div>
      <table id="cart" class="table table-hover table-condensed" v-if="cartarr.length>0">
        <thead>
          <tr>
            <th style="width:50%">Product</th>
            <th style="width:10%">Price</th>
            <th style="width:8%">Quantity</th>
            <th style="width:22%" class="text-center">Subtotal</th>
            <th style="width:10%"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartarr" v-bind:key="item.c_id">
            <td data-th="Product">
              <div class="row">
                <div class="col-sm-2">
                  <img
                    style="height:100px;width:100px;"
                    v-bind:src="'http://localhost:3000/images/products/' + item.fk_p_img"
                    alt="..."
                    class="img-responsive"
                  />
                </div>
                <div class="col-sm-10">
                  <h4 class="productname">{{item.fk_p_name}}</h4>
                  <p class="productname">{{item.fk_p_des}}</p>
                </div>
              </div>
            </td>
            <td data-th="Price">&#8377;<big>{{item.fk_p_price*50/100}}</big>&nbsp;<strike>{{item.fk_p_price}}</strike></td>
            <td data-th="Quantity">
              <input
                type="number"
                class="form-control text-center"
                @change="onchange(item)"
                v-model="item.qty"
              />
            </td>
            <td data-th="Subtotal" class="text-center">&#8377;{{item.c_price*50/100}}</td>
            <td class="actions" data-th>
              <button class="btn btn-info btn-sm">
                <i class="fa fa-refresh"></i>
              </button>
              <button @click="ondelete(item)" class="btn btn-danger btn-sm">
                <i class="fa fa-trash-o"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="font-size:18px;">
              <b>+CGST 9 %</b>
            </td>
            <td></td>
            <td class="text-center" style="color:red;">
              +
              <b>{{cgst.toFixed(2)}}</b>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="font-size:18px;">
              <b>+SGST 9 %</b>
            </td>
            <td></td>
            <td class="text-center" style="color:red;">
              +
              <b>{{sgst.toFixed(2)}}</b>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="font-size:18px;">
              <b>Total Payable Amount</b>
            </td>
            <td></td>
            <td class="text-center" style="font-size:18px;color:blue;">
              &#8377;
              <b>{{total}}</b>
            </td>
          </tr>
          <tr>
            <td>
              <button
                @click="onplaceorder"
                style="width:100%;margin-left:50%;"
                class="btn btn-sm btn-outline-success"
              >Place Order</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <footer1></footer1>
    </body>
    </html>
  </div>
</template>

<script>
import cartclass from "../service/cart";
import profileclass from "../service/profile";
import orderclass from "../service/order";
import suborderclass from "../service/suborder";
export default {
  data() {
    return {
      cartarr: [{}],
      total: 0.0,
      sgst: 0.0,
      cgst: 0.0,
      order_id: 0,
      order: [
        {
          o_id: "",
          o_price: "",
          o_date: new Date().toLocaleString(),
          fk_emailid: "",
          fk_address: "",
          status: "pending"
        }
      ],
      suborder: [
        {
          fk_o_id: "",
          fk_p_id: "",
          fk_p_name: "",
          fk_p_qty: "",
          fk_p_price: "",
          c_price: ""
        }
      ],
      // suborder:[],
      j: 0
    };
  },
  created() {
    cartclass.getcartbyemail(localStorage.getItem("emailid")).then(doc => {
      this.cartarr = doc.data;

      for (let i = 0; i < this.cartarr.length; i++) {
        this.total += (this.cartarr[i].c_price*50/100);
      }
      this.sgst = (this.total * 0.09);
      this.cgst = (this.total * 0.09);
      this.total += this.sgst + this.cgst;
      this.total=this.total.toFixed();

    });
  },
  methods: {
    onchange: function(item) {
      this.total -= this.sgst;
      this.total -= this.cgst;
      this.total -= item.c_price*50/100;
      item.c_price = (item.fk_p_price) * item.qty;
      this.total += item.c_price*50/100;
      this.sgst = (this.total * 0.09);
      this.cgst = (this.total * 0.09);
      this.total += this.sgst + this.cgst;
      this.total=this.total.toFixed();

    },
    ondelete: function(item) {
      this.total = 0.0;
      cartclass.deleteitem(item._id).then(doc => {
        for (let i = 0; i < this.cartarr.length; i++) {
          if (this.cartarr[i]._id === item._id) {
            this.cartarr.splice(i, 1);
          }
            this.total += (this.cartarr[i].c_price*50/100);
        }
        this.sgst = (this.total * 0.09);
        this.cgst = (this.total * 0.09);
        this.total += this.sgst + this.cgst;
        this.total=this.total.toFixed();

      });
    },
    onplaceorder: function() {
      const data = {
        finalAmt: this.total
      };

      orderclass.makepayment(data).then(res => {
        let response = res.data;
        this.order_id = response.orderID;

        var options = {
          key: "rzp_test_jG7kHH2emV2Ihi", // Enter the Key ID generated from the Dashboard
          amount: this.total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "GiftiNation",
          description: "Make payment to purchase the product.",
          order_id: this.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: this.handlerr,
          theme: {
            color: "orangered"
          }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
      });
    },
    handlerr(response) {
      orderclass
        .capturePayment({
          id: response.razorpay_payment_id,
          amount: this.total * 100
       })
        .then(res => {
          let response = res.data;

          if (response.result === 1) {
            this.order[0].o_id = Math.random() * 100;
            console.log(this.total.toFixed() + "Total value in final");
            this.order[0].o_price = this.total.toFixed();

            this.order[0].fk_emailid = localStorage.getItem("emailid");
            profileclass
              .getEmpdetails(localStorage.getItem("emailid"))
              .then(doc => {
                this.order[0].fk_address = doc.data[0].u_address;
                orderclass.addorder(this.order[0]).then(doc => {
                  console.log(doc);
                  console.log(doc.data._id);

                  console.log(this.cartarr.length);
                  for (let i = 0; i < this.cartarr.length; i++) {
                    this.suborder[i] = {
                      fk_o_id: this.order[0].o_id,
                      fk_p_id: this.cartarr[i].fk_p_id,
                      fk_p_name: this.cartarr[i].fk_p_name,
                      fk_p_qty: this.cartarr[i].qty,
                      fk_p_price: this.cartarr[i].fk_p_price,
                      c_price: this.cartarr[i].c_price
                    };

                    console.log(this.suborder[i]);

                    suborderclass.addsuborder(this.suborder[i]).then(doc1 => {
                      console.log(doc1);
                      this.$fire({
                        title: "Your Order is Successfully placed",
                        type: "success",
                        timer: 3000
                      }).then(r => {
                        console.log(r.value);
                      });
                      this.cartarr = [];
                    });
                  }
                });

                cartclass
                  .deleteallitem(localStorage.getItem("emailid"))
                  .then(doc => {
                    console.log(doc);
                  });

                  alert("Payment Done !!!");
              });
          }
        });
    }
  }
};
</script>

<style scoped>
.footer {
  margin-top: 100%;
}
.total {
  margin-left: 10%;
}
.btn {
  margin-left: 100%;
}
.finaltotal {
  margin-left: 70%;
}
.productname {
  margin-left: 5%;
}
.table tbody tr td,
.table tfoot tr td {
  vertical-align: middle;
}

@media screen and (max-width: 600px) {
  table#cart tbody td .form-control {
    width: 20%;
    display: inline !important;
  }
  .actions .btn {
    width: 36%;
    margin: 1.5em 0;
  }
  .actions .btn-info {
    float: left;
  }
  .actions .btn-danger {
    float: right;
  }
  table#cart thead {
    display: none;
  }
  table#cart tbody td {
    display: block;
    padding: 0.6rem;
    min-width: 320px;
  }
  table#cart tbody tr td:first-child {
    background: #333;
    color: #fff;
  }
  table#cart tbody td:before {
    content: attr(data-th);
    font-weight: bold;
    display: inline-block;
    width: 8rem;
  }
  table#cart tfoot td {
    display: block;
  }
  table#cart tfoot td .btn {
    display: block;
  }
}
</style>
