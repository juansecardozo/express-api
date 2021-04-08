const express = require("express");
const app = express();
const server = require("http").Server(app);

const socket = require("./socket");
const db = require("./db");
const router = require("./network/routes");

db(
    "mongodb+srv://mongo:r5RK08z9oz7bGwW8@example.sxmuc.mongodb.net/example?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1"
);

app.use(express.json());

socket.connect(server);

router(app);

app.use("/app", express.static("public"));

server.listen(3000, () => {
    console.log("Server started at port 3000");
});
