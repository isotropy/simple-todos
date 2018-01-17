import { db, table, DbServer } from "isotropy-db";

export default db({
  accounts: table([
    {
      __id: "1",
      username: "jeswin",
      hash: "8981948d97a82c9a85df2101a5aafb74"
    }
  ]),
  todos: table([{
    __id: "1",
    task: "Get the transpiler working",
    assignedTo: "jeswin"
  }])
});
