import http from '../http-common';

class productclass{
  getprobycat(fk_cat_id){
    return http.get("/productbycat/" + fk_cat_id);
  }
  categoryname(catid)
  {
    return http.get("/cat/" + catid);
  }
  getAllcategory(){
    return http.get("/cat");
  }
}

export default new productclass();
