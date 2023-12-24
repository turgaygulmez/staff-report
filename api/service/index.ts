import BaseService from "../base";

export default class Service extends BaseService {
  getProjects(data: any) {
    return this.post({ url: "project", data });
  }

  createUser(data: any) {
    return this.post({ url: "user", data });
  }
}
