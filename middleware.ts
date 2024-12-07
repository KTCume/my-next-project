import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

export const middliware = createNextAuthMiddleware();

export const config = {
    matcher: ["/(.*)"],
};