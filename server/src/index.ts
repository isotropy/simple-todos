import auth from "./auth";
import todos from "./todos";

export default [
  ["post", "/auth/login", auth.login],
  ["post", "/auth/logout", auth.logout],
  ["get", "/todos", todos.getAll],
  ["get", "/todos/:id", todos.get],
  ["post", "/todos", todos.create],
  ["del", "/todos/:id", todos.remove]
];

