const express = require("express");
const app = express();
const server = require("http").Server(app);

require("dotenv").config();
const config = require("./config");

const cors = require("cors");
const socket = require("./socket");
const db = require("./db");
const router = require("./network/routes");

db(config.dbUrl);

app.use(cors());
app.use(express.json());

socket.connect(server);

router(app);

app.use(config.publicRoute, express.static("public"));

server.listen(config.port, () => {
    console.log(`Server started at ${config.host}:${config.port}`);
});
