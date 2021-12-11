import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordFromBody = req?.body;

  const jsonFile = path.resolve("./", "db.json");
  switch (method) {
    case "POST":
      await postMethod();
      break;
    case "PUT":
      await putMethod();
      break;
    case "DELETE":
      await deleteMethod();
      break;
    case "GET":
      await getMethod();
      break;
    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
  }

  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const monsters = JSON.parse(readFileData).monsters;
      if (!monsters) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newMonsterArray = monsters.map(function (rec) {
          return rec.id === id ? recordFromBody : rec;
        });
        writeFile(
          jsonFile,
          JSON.stringify({ monsters: newMonsterArray }, null, 2)
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(recordFromBody, null, 2));
        console.log(`PUT /api/monsters/${id}   status: 200`);
      }
    } catch (e) {
      res
        .status(500)
        .send(`PUT /api/monsters/${id}   status: 500 unexpected error`);
      console.log(`PUT /api/monsters/${id}   status: 200`, e);
    }
  }

  async function deleteMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const monsters = JSON.parse(readFileData).monsters;
      if (!monsters) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const newMonstersArray = monsters.filter(function (rec) {
          return rec.id != id;
        });
        writeFile(
          jsonFile,
          JSON.stringify({ monsters: newMonstersArray }, null, 2)
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(
          JSON.stringify(
            monsters.find((rec) => rec.id === id),
            null,
            2
          )
        );
        console.log(`DELETE /api/monsters/${id}   status: 200`);
      }
    } catch (e) {
      res
        .status(500)
        .send(`DELETE /api/monsters/${id}   status: 500 unexpected error`);
      console.log(`DELETE /api/monsters/${id}   status: 200`, e);
    }
  }

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const monsters = JSON.parse(readFileData).monsters;
      if (!monsters) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        const idNew =
          monsters.reduce((accumulator, currentValue) => {
            const idCurrent = parseInt(currentValue.id);
            return idCurrent > accumulator ? idCurrent : accumulator;
          }, 0) + 1;

        const newMonsterRec = { ...recordFromBody, id: idNew.toString() };

        const newMonsterArray = [newMonsterRec, ...monsters];
        writeFile(
          jsonFile,
          JSON.stringify({ monsters: newMonsterArray }, null, 2)
        );
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(newMonsterRec, null, 2));
        console.log(`POST /api/monsters/${id}   status: 200`);
      }
    } catch (e) {
      res
        .status(500)
        .send(`POST /api/monsters/${id}   status: 500 unexpected error`);
      console.log(`POST /api/monsters/${id}   status: 200`, e);
    }
  }

  async function getMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const monsters = JSON.parse(readFileData).monsters;
      const monster = monsters.find((rec) => {
        return rec.id == id;
      });
      if (!monster) {
        res.status(404).send("Error: Request failed with status code 404");
      } else {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(monster, null, 2));
        console.log(`GET /api/monsters/${id}   status: 200`);
      }
    } catch (e) {
      res
        .status(500)
        .send(`GET /api/monsters/${id}   status: 500 unexpected error`);
      console.log(`GET /api/monsters/${id}   status: 200`, e);
    }
  }
}
