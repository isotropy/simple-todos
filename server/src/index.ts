import Server from "isotropy-webserver";
import * as auth from "./auth";
import * as todos from "./todos";
import home from "./home";

export default function () {
  const server = new Server();
  server.addRoutes([
    ["get", "/", home],
    ["post", "/auth/login", auth.login],
    ["post", "/auth/logout", auth.logout],
    ["get", "/todos", todos.getAll],
    ["get", "/todos/:id", todos.get],
    ["post", "/todos", todos.create],
    ["del", "/todos/:id", todos.remove],
  ]);
  return server;
}
