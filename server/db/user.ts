import { User } from "@/types/db";
import BaseDatabase from "./base";

class UserDB extends BaseDatabase {
  private static instance: UserDB;

  constructor() {
    super();

    if (UserDB.instance) {
      return UserDB.instance;
    }

    UserDB.instance = this;
  }

  async insert(data: User) {
    const user = this.database.chain
      .get("users")
      .find({ jiraUserName: data.jiraUserName })
      .value();

    if (!user) {
      this.database.data.users.push(data);
      this.database.write();
    }
  }
}

export default UserDB;
