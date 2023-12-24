import JiraApi from "jira-client";
import orderBy from "lodash/orderBy";

export default defineEventHandler(async (event) => {
  const { projectId, jiraUserName, jiraToken } = await readBody(event);

  const jira = new JiraApi({
    protocol: "https",
    host: process.env.JIRA_DOMAIN ?? "",
    username: jiraUserName,
    password: jiraToken,
    apiVersion: "3",
    strictSSL: true,
  });

  return orderBy(
    (
      await jira.getAllBoards(0, 1000, undefined, undefined, projectId)
    )?.values?.map(({ id, name }: any) => {
      return {
        value: id,
        title: name,
      };
    }),
    ["title"],
    ["asc"]
  );
});
