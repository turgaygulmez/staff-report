import { ConfigDB } from "~/server/db";

export default defineEventHandler(async (event) => {
  return new ConfigDB().getByUser(event.context.params?.id ?? "");
});
