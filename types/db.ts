export interface User {
  id: string;
  jiraDomain: string;
  jiraToken: string;
  jiraUserName: string;
}

export interface DBStructure {
  users: User[];
}
