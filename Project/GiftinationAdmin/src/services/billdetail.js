import http from '../http-common';

class billdetailclass{
    getallbilldetail(fk_bill_id)
    {
        return http.get("/billdetail/"+fk_bill_id);
    }
    addbilldetail(item)
    {
        console.log(item);
        return http.post("/billdetail",item);
    }
}
export default new billdetailclass();