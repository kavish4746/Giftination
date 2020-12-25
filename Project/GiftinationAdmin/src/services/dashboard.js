import http from '../http-common';

class dashboardclass{
    getalluser()
    {
        return http.get("/info");
    }
    getallcontactmsg()
    {
        return http.get("/contactus");
    }
    getbufferstock(){
        return http.get("/bufferstock");
    }
    getallpendingorder()
    {
        return http.get("/orderbystatus/"+"pending");
    }
}
export default new dashboardclass();