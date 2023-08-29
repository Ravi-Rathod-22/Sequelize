import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  // process.env.DATABASE,
  // process.env.USER_NAME,
  // process.env.USER_PASSWORD,
  "employeedb",
  "root",
  "Chits@123.",
  {
    host: "localhost",
    dialect:
      "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
