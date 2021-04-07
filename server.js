const express = require("express");
const db = require("./db");
const router = require("./network/routes");

let app = express();

app.use(express.json());

router(app);

db(
    "mongodb+srv://mongo:r5RK08z9oz7bGwW8@example.sxmuc.mongodb.net/example?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1"
);

app.listen(3000);

console.log("Server started at port 3000");
