const express = require("express");

const routes = (server) => {
    // server.use("/app", express.static("../public"));
    server.use("/messages", require("../components/messages/network"));
};

module.exports = routes;
