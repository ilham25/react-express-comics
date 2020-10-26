import Mysql from "mysql";

export default function Sql() {
  const db = Mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "express_comics",
  });

  const get = (id = null, cb) => {
    const sqlGet =
      id == null
        ? "SELECT * FROM comics_table"
        : `SELECT * FROM comics_table WHERE id=?`;
    db.query(sqlGet, id, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };

  const insert = (data) => {
    const sqlInsert =
      "INSERT INTO comics_table (title,creator,publisher) VALUES (?,?,?)";
    db.query(sqlInsert, data, (err, res) => {
      if (err) throw err;
      console.log("data insert");
    });
  };

  return {
    get,
    insert,
  };
}
