import Express from "express";
import BodyParser from "body-parser";
import Cors from "cors";
import Sql from "./database.js";

const app = Express();
const port = 3030;
const sql = Sql();

app.use(Cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const { title, creator, publisher } = req.body;
  // console.log("POST : ", title);
  sql.insert([title, creator, publisher]);
});

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  // console.log("DELETE : ", id);
  sql.remove(id);
});

app.get("/api", (req, res) => {
  sql.get(null, (result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
