import { Context } from "koa";
import server from "./db";

export async function get(ctx: Context) {
  const db = await server.open();
  const todo = await db.tables.todos.first(x => x.__id === "1");
  ctx.body = {
    todo
  };
}

export async function getAll(ctx: Context) {}

export async function create(ctx: Context) {}

export async function remove(ctx: Context) {}
