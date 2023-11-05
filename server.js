const mongoose = require("mongoose");
const http = require("http");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const server = http.createServer(app);

const DATABASE = process.env.DATABASE || "";
const PASSWORD = process.env.DATABASE_PASSWORD || "";

const DB = DATABASE.replace("<PASSWORD>", PASSWORD);

mongoose
  .connect(DB, {
    retryWrites: true,
    w: "majority",
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
