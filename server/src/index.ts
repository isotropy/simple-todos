import Koa from "koa";
import Router from "koa-router"

import auth from "./auth";
import todos from "./todos";

const app = new Koa();

const router = new Router();
router.post("/auth/login", auth.login);
router.post("/auth/logout", auth.logout);

router.get("/todos", todos.getAll);
router.get("/todos/:id", todos.get);
router.post("/todos", todos.create);
router.del("/todos/:id", todos.remove);
