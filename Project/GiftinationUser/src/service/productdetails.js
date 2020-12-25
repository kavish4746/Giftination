import http from '../http-common';

class productclass{
  getprobycat(fk_cat_id){
    return http.get("/productbycat/" + fk_cat_id);
  }
  categoryname(catid)
  {
    return http.get("/cat/" + catid);
  }
  getproductbyid(p_id)
  {
      return http.get("/product/"+p_id);
  }
}

export default new productclass();
