import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations",
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  casing: "snake_case",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
