import http from '../http-common';

class suborderclass{
    getallsuborders(fk_o_id)
    {
        return http.get("/suborder/"+fk_o_id);
    }
    
}
export default new suborderclass();