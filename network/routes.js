const routes = (server) => {
    server.use(
        "/chats/:chat/messages",
        require("../components/message/network")
    );
    server.use("/users", require("../components/user/network"));
    server.use("/chats", require("../components/chat/network"));
};

module.exports = routes;
