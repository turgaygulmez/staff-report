import type { Config, User } from "~/types";
import BaseService from "../base";

export default class Service extends BaseService {
  getProjects(data: any) {
    return this.post({ url: "project", data });
  }

  registerUser(data: any): Promise<User> {
    return this.post<User>({ url: "user", data });
  }

  getUser(id: string): Promise<User> {
    return this.get<User>({ url: `user/${id}` });
  }

  getConfigs(id: string): Promise<Config[]> {
    return this.get<Config[]>({ url: `config/${id}` });
  }

  getForm(schema: string) {
    return this.get<any>({ url: `form/${schema}` });
  }
}
