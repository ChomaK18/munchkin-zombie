import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handler(req, res) {
  const jsonFile = path.resolve("./", "db.json");
  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const monsters = JSON.parse(readFileData).monsters;
    if (monsters) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(monsters, null, 2));
      console.log("GET /api/monsters status: 200");
    }
  } catch (e) {
    console.log("/api/monsters error", e);
    res.status(404).send("File Not Found on server");
  }
}
