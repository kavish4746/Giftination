import http from '../http-common';

class contactclass{
  addcontact(item){
      console.log(item)
      return http.post("/contactus/",item);
  }
}

export default new contactclass();
