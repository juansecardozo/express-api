const express = require("express");
const router = require("./network/routes");

let app = express();

app.use(express.json());

router(app);

app.listen(3000);

console.log("Server started at port 3000");
