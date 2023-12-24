import orderBy from "lodash/orderBy";
import { UserDB } from "~/server/db";
import { getJiraInstance } from "@/server/helpers";
import { v4 as uuidv4 } from "uuid";

export default defineEventHandler(async (event) => {
  const userDB = new UserDB();
  const { jiraDomain, jiraUserName, jiraToken } = await readBody(event);

  await userDB.insert({
    id: uuidv4(),
    jiraDomain: jiraDomain,
    jiraToken: jiraUserName,
    jiraUserName: jiraToken,
  });
});
