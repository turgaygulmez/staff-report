import JiraApi from "jira-client";

export const getJiraInstance = (
  jiraDomain: string,
  jiraUserName: string,
  jiraToken: string
) => {
  return new JiraApi({
    protocol: "https",
    host: jiraDomain ?? "",
    username: jiraUserName,
    password: jiraToken,
    apiVersion: "3",
    strictSSL: true,
  });
};
