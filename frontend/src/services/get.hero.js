import http from "../http-common";

class TutorialDataService {

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
