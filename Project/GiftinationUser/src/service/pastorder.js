import http from '../http-common';

class pastorderclass{
  addorder(item){
      console.log(item)
      return http.post("/pastorder/",item);
  }
  getorderbystatus(emailid,status)
  {
      return http.get("/pastorder/"+emailid+"/"+status);
  }
}

export default new pastorderclass();
