import { UserDB } from "~/server/db";

export default defineEventHandler(async (event) => {
  const user = new UserDB().get(event.context.params?.id ?? "");
  return user;
});
