import http from '../http-common';

class orderclass{
    getallorders()
    {
        return http.get("/order");
    }
    getorderbystatus(status){
        return http.get("/orderbystatus/"+status);
    }
    updateorderstatus(item)
    {
        return http.put("/order",item);
    }
}
export default new orderclass();