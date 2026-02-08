import { createRouter } from "../../openapi";
import { handlers } from "./handlers";
import { routes } from "./routes";

export const todoListsRouter = createRouter();

(Object.keys(routes) as Array<keyof typeof routes>).forEach((key) => {
	todoListsRouter.openapi(routes[key], handlers[key]);
});
