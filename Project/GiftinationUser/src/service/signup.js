import http from '../http-common';

class signupclass{
  adduser(item){
      console.log(item);
    return http.post("/info/",item);
  }
}

export default new signupclass();
