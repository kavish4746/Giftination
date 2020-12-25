import http from '../http-common';

class cartclass{
  getcartbyemail(emailid){
    return http.get("/cart/" + emailid);
  }
  addtocart(item){
      return http.post("/cart/",item);
  }
  deleteitem(_id)
  {
      return http.delete("/cart/"+_id);
  }

  deleteallitem(fk_emailid)
  {
      return http.delete("/deleteall/"+fk_emailid);
  }
}

export default new cartclass();
