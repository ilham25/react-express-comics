import Express from "express";
import BodyParser from "body-parser";
import Cors from "cors";
import Mysql from "mysql";

const app = Express();
const port = 3030;

app.post("/api/insert", (req, res) => {});

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
