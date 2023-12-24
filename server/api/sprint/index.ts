import JiraApi from "jira-client";
import orderBy from "lodash/orderBy";

export default defineEventHandler(async (event) => {
  const { boardId, jiraDomain, jiraUserName, jiraToken } = await readBody(
    event
  );

  const jira = new JiraApi({
    protocol: "https",
    host: jiraDomain ?? "",
    username: jiraUserName,
    password: jiraToken,
    apiVersion: "3",
    strictSSL: true,
  });

  const closedSprints = orderBy(
    (await jira.getAllSprints(boardId, 0, undefined, "closed")).values,
    ["name"],
    ["asc"]
  );

  const openSprints = (
    await jira.getAllSprints(boardId, 0, undefined, "active")
  ).values;

  return [...openSprints, ...closedSprints]?.map(({ id, name }: any) => {
    return {
      value: id,
      title: name,
    };
  });
});
