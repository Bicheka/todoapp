import { OpenAPIHono } from "@hono/zod-openapi";

import packageJSON from "../../package.json";

export function createRouter() {
	return new OpenAPIHono({
		strict: false,
	});
}

export function createOpenAPIDoc(app: OpenAPIHono) {
	return app.getOpenAPIDocument({
		openapi: "3.1.0",
		info: {
			title: packageJSON.name,
			version: packageJSON.version,
		},
		security: [{BearerAuth: []}]
	});
}

