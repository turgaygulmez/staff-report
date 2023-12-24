import Service from "./service";

class API {
  private service;

  constructor() {
    this.service = new Service();
  }
}

export default Object.freeze(new API());
