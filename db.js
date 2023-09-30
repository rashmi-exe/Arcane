import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  port: 3306,
  password: "password",
  database:"blog"
})
db.connect((err) => {
  if (err) {
      console.error("Error connecting to the database:", err);
      return;
  }
  console.log("Connected to the database!");
});