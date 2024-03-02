import { Sequelize } from "sequelize";

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

export const connection = new Sequelize({
  database,
  username,
  password,
  host: "localhost",
  dialect: "postgres",
});

try {
  connection.authenticate();
  console.log("Connection Established");
  connection.sync();
  console.log("Connection Sync");
} catch (error) {
  console.log(error);
}
