import { Context } from "koa";

const html = `
<html>
  <body>
    Welcome to the Simple Todos API. If you don't know what to do, read the <a href="https://www.github.com/isotropy/simple-todos">API Documentation</a>.
  </body>
</html>`;

export default async function(ctx: Context) {
  ctx.body = html;
}
