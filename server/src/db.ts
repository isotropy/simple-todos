import { db, table, DbServer } from "isotropy-db";

export default db({
  accounts: table([
    {
      username: "jeswin",
      hash: "8981948d97a82c9a85df2101a5aafb74"
    }
  ]),
  todos: table([])
});
