import Express from "express";
import BodyParser from "body-parser";
import Cors from "cors";
import Sql from "./database.js";

const app = Express();
const port = 3030;
const sql = Sql();

app.post("/api/insert", (req, res) => {});

app.get("/", (req, res) => {
  sql.get(null, (result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
