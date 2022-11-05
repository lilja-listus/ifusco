import next from "next";
import { NextServer } from "next/dist/server/next";

const nextApp: NextServer = next({
  dev: process.env.NODE_ENV !== "production",
  dir: __dirname,
});

export default nextApp;
