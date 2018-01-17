import Koa = require("koa");
import Router = require("koa-router");
import * as auth from "./auth";
import * as todos from "./todos";
import home from "./home";

export default function () {
  const router = new Router();
  router.get("/", home)
  router.post("/auth/login", auth.login);
  router.post("/auth/logout", auth.logout);
  router.get("/todos", todos.getAll);
  router.get("/todos/:id", todos.get);
  router.post("/todos", todos.create);
  router.del("/todos/:id", todos.remove);
  
  const app = new Koa();
  app.use(router.routes());
  
  return app;  
}
