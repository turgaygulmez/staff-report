import { JSONFileSync } from "lowdb/node";
import { LowSync } from "lowdb";
import { DBStructure } from "@/types/db";
import lodash from "lodash";

class LowWithLodash<T> extends LowSync<T> {
  chain: lodash.ExpChain<this["data"]> = lodash.chain(this).get("data");
}

export default class BaseDatabase {
  public database!: LowWithLodash<DBStructure>;

  constructor() {
    const adapter = new JSONFileSync<DBStructure>("./server/db/data/db.json");
    const defaultValue: DBStructure = {
      users: [],
    };
    this.database = new LowWithLodash(adapter, defaultValue);
    this.database.read();
  }
}
