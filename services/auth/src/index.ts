import { Hono } from "hono";
import { logger } from "hono/logger";
import { auth } from "./lib/auth";
import { cors } from "hono/cors";
const app = new Hono();
app.use(logger());

// cors
app.use(
  "/api/auth/*", // or replace with "*" to enable cors for all routes
  cors({
    origin: "http://localhost:3001", // replace with your origin
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

// this line of code adds several routes provided by better auth got to /api/auth/reference
app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));
export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
