import http from '../http-common';

class categoryclass{
    getallcategory()
    {
        return http.get("/cat");
    }
    addcat(item)
    {
        return http.post("/cat",item);
    }
    deletecat(cat_id)
    {
        return http.delete("/cat/"+cat_id);
    }
}
export default new categoryclass();