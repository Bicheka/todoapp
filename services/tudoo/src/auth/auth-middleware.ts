import type { MiddlewareHandler } from "hono";
import { z } from "zod";
import { validateJwt } from "./jwk-client";

const subSchema = z.object({
	sub: z.string(),
});

export type AuthContext = {
	userId: string;
};

export const authMiddleware: MiddlewareHandler<{
	Variables: AuthContext;
}> = async (c, next) => {
	const header = c.req.header("authorization");

	if (!header?.startsWith("Bearer ")) {
		return c.json({ message: "Unauthorized" }, 401);
	}

	const token = header.split(" ")[1];

	try {
		const payload = await validateJwt(token);

		const parsed = subSchema.parse(payload);

		c.set("userId", parsed.sub);

		await next();
	} catch (err) {
		console.error("JWT ERROR:", err);
		return c.json({ message: "Invalid token" }, 401);
	}
};
