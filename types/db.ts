export interface DBStructure {
  users: User[];
  configs: Config[];
}

export interface User {
  id: string;
  jiraDomain: string;
  jiraToken: string;
}

export interface ConfigItem {
  value: string;
  title: string;
}

export interface Config {
  id: string;
  userId: string;
  name: string;
  project: ConfigItem;
  board: ConfigItem;
  sprint: ConfigItem;
}
