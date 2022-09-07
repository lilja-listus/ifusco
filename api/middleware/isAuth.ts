import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";
import jwt from "jsonwebtoken";

const APP_SECRET = process.env.SESSION_SECRET || "aslkdfjoiq12312";

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const authorization = context.req.headers["authorization"];

  try {
    const token = authorization?.replace("Bearer ", "")!;
    const user = token && (jwt.verify(token, APP_SECRET) as any);
    context.res.locals.userId = user.id;
    return next();
  } catch (err) {
    console.log(err);

    throw new Error(err.message);
  }
};
