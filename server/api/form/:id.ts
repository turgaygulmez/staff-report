import fs from "fs";

export default defineEventHandler(async (event) => {
  const schema = event.context.params?.id;

  return JSON.parse(fs.readFileSync(`./server/forms/${schema}.json`, "utf8"));
});
