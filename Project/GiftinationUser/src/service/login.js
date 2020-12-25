import http from '../http-common';

class loginclass{
  getEmpByEmailPassword(emailid,password){
    return http.get("/info/" + emailid + "/" + password);
  }
  getpassword(emailid){
    return http.get("/info/" + emailid);
  }
  sendmail(item){
    return http.post("/mail",item);
  }
}

export default new loginclass();
