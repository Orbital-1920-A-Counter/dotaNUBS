import http from "../http-common";

class getData {

  get_player(id) {
    return http.get('/${id}');
  }
  get_heroes(){
    return http.get('/heroes');
  }
  get_hero_by_id(id){
  	return http.get('/heroes/${id}');
  }
  get_hero_matchups(id){
  	return http.get('heroes/${id}/matches')
  }
}

export default new getData();
