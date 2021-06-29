const { db } = require("./server/db");
const app = require("./server");
const PORT = 1337;

db.sync().then(() => {
  console.log("DB synced!");
  app.listen(PORT, () => {
    console.log(`Serving it up on ${PORT}!!`);
  });
});
