import http from '../http-common';

class productclass{
    getallproduct()
    {
        return http.get("/product");
    }

    getproductbyid(p_id)
    {
        return http.get("/product/"+p_id);
    }
    addproduct(item)
    {
        console.log(item);
        return http.post("/product",item);
    }
    productbycat(fk_cat_id)
    {
        return http.get("/productbycat/"+fk_cat_id);
    }

    deleteproduct(p_id)
    {
        return http.delete("/product/"+p_id);
    }

    updateproduct(item)
    {
        return http.put("/product/"+item.p_id,item);
    }
}
export default new productclass();