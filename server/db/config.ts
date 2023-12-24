import { Config } from "@/types";
import BaseDatabase from "./base";

class ConfigDB extends BaseDatabase {
  private static instance: ConfigDB;

  constructor() {
    super();

    if (ConfigDB.instance) {
      return ConfigDB.instance;
    }

    ConfigDB.instance = this;
  }

  insert(data: Config) {
    const config = this.get(data.id);

    if (!config) {
      this.database.data.configs.push(config);
      this.database.write();
    }

    return this.get(data.id);
  }

  get(id: string) {
    return this.database.chain.get("configs").find({ id }).value();
  }

  getByUser(id: string) {
    return this.database.chain.get("configs").filter({ userId: id }).value();
  }
}

export default ConfigDB;
