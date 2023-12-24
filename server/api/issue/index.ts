import orderBy from "lodash/orderBy";
import { getJiraInstance } from "@/server/helpers";

export default defineEventHandler(async (event) => {
  const { sprintId, boardId, jiraUserName, jiraToken } = await readBody(event);
  const jira = getJiraInstance("", jiraUserName, jiraToken);

  return orderBy(
    (await jira.getBoardIssuesForSprint(boardId, sprintId))?.values?.map(
      ({ id, name }: any) => {
        return {
          value: id,
          title: name,
        };
      }
    ),
    ["title"],
    ["asc"]
  );
});
