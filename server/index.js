import Express from "express";

const app = Express();
const port = 3030;

app.listen(port, () => {
  console.log(`Server run on http://localhost:${port}`);
});
