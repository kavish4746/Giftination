import http from '../http-common';

class infoclass{
  getEmpdetails(emailid){
    return http.get("/info/" + emailid);
  }
  updateinfodetails(item)
  {
      console.log(item[0]);
      return http.put("/info/"+item[0]._id,item[0]);
  }
}

export default new infoclass();
