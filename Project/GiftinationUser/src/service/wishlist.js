import http from '../http-common';

class wishlistclass{
  addtowishlist(item){
      console.log(item);
    return http.post("/wishlist/",item);
  }
  getwishlistbyemail(email)
  {
      return http.get("/wishlist/"+email);
  }
  deleteitem(_id)
  {
      return http.delete("/wishlist/"+_id);
  }
}

export default new wishlistclass();
