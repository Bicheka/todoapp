import { sql } from "bun"; // sql is meant for postgress for a different db see https://bun.com/docs/runtime/sql
import { drizzle } from "drizzle-orm/bun-sql";
import * as schema from "./schema";

// sql automatically uses an enviroment variable to get the database url "POSTGRES_URL"
export const db = drizzle(sql, { schema });
