import http from '../http-common';

class billclass{
    getallbill()
    {
        return http.get("/bill");
    }
    addbill(item)
    {
        return http.post("/bill",item);
    }
}
export default new billclass();