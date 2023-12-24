import orderBy from "lodash/orderBy";
import { UserDB } from "~/server/db";
import { getJiraInstance } from "@/server/helpers";
import { v4 as uuidv4 } from "uuid";

export default defineEventHandler(async (event) => {
  const { jiraDomain, jiraUserName, jiraToken } = await readBody(event);

  const jira = getJiraInstance(jiraDomain, jiraUserName, jiraToken);

  return orderBy(
    (await jira.listProjects())?.map(({ id, key, name }) => {
      return {
        value: id,
        title: `${name} (${key})`,
      };
    }),
    ["title"],
    ["asc"]
  );
});
