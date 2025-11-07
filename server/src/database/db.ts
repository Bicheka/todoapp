import pkg from "pg";
import fs from "fs";

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB_NAME,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
  connectionTimeoutMillis: 5000,
});

// Optional: catch runtime disconnects
pool.on("error", (err) => {
  console.error("Unexpected DB error:", err);
});

export default pool;

function loadSql(relativePath: string) {
  return fs.readFileSync(import.meta.dirname + relativePath, "utf8");
}

export async function initTables() {
  try {
    await pool.query(loadSql("/tables/todo-lists-table.sql"));
    await pool.query(loadSql("/tables/todo-table.sql"));
  } catch (error) {
    console.error(error);
  }
}
