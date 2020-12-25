import http from '../http-common';

class suborderclass{
  addsuborder(item){
      return http.post("/suborder/",item);
  }
}

export default new suborderclass();
