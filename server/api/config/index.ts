import { ConfigDB } from "~/server/db";

export default defineEventHandler(async (event) => {
  const db = new ConfigDB();
  const { id, name, userId, project, board, sprint } = await readBody(event);

  return db.insert({
    id,
    userId,
    name,
    project,
    board,
    sprint,
  });
});
