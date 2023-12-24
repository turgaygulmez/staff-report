import Service from "./service";

export default class API {
  private static instance: API;

  public service;

  constructor() {
    this.service = new Service();

    if (API.instance) {
      return API.instance;
    }

    API.instance = this;
  }
}
