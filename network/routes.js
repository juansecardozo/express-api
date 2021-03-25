const routes = (server) => {
    server.use("/messages", require("../components/messages/network"));
};

module.exports = routes;
