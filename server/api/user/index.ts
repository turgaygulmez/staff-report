import { UserDB } from "~/server/db";

export default defineEventHandler(async (event) => {
  const db = new UserDB();
  const { jiraDomain, jiraUserName, jiraToken } = await readBody(event);

  return db.insert({
    id: jiraUserName,
    jiraDomain: jiraDomain,
    jiraToken: jiraToken,
  });
});
