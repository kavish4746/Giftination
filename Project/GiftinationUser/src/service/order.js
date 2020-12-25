import http from "../http-common";

class orderclass {
  addorder(item) {
    console.log(item);
    return http.post("/order/", item);
  }
  getorderbystatus(fk_emailid, status) {
    return http.get("/joinorder/" + fk_emailid + "/" + status);
  }
  makepayment(item) {
    return http.post("/makepayment/", item);
  }
  capturePayment(item) {
    return http.post("/makepayment/capturePayment/", item);
  }
}

export default new orderclass();
