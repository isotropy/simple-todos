import { Context, Middleware } from "koa";
import server from "./db";
import redis from "./redis";
import md5 = require("md5");

export async function login(ctx: Context) {
  const { username, password } = ctx.params;
  const db = await server.open();
  const account = await db.tables.accounts.singleOrDefault(
    a => a.username === username
  );
  if (account && account.hash === md5(password)) {
    ctx.body = {
      ok: true,
      token: "1234"
    };
  } else {
    ctx.status = 401;
    ctx.body = {
      ok: false,
      error: "Invalid username or password."
    };
  }
}

export async function logout(ctx: Context) {
  return {
    ok: true
  };
}
