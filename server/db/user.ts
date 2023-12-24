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

  insert(data: User) {
    const user = this.get(data.id);

    if (!user) {
      this.database.data.users.push(data);
      this.database.write();
    }

    return this.get(data.id);
  }

  get(id: string) {
    return this.database.chain.get("users").find({ id }).value();
  }
}

export default UserDB;
