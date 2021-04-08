const ValidationError = require("../../errors/ValidationError");
const store = require("./store");
const { socket } = require("../../socket");

const addMessage = (user, message, chat, file) => {
    return new Promise((resolve, reject) => {
        let errors = [];
        if (!user) {
            console.error("[messageController] No user");
            errors.push({ user: "User is required" });
        }
        if (!chat) {
            console.error("[messageController] No chat");
            errors.push({ chat: "Chat is required" });
        }
        if (!message) {
            console.error("[messageController] No message");
            errors.push({ message: "Message is required" });
        }
        if (errors.length) {
            return reject(new ValidationError(errors));
        }

        let fileUrl = "";
        if (file) {
            fileUrl = "http://localhost:3000/public/files/" + file.filename;
        }

        const newMessage = {
            user,
            chat,
            message,
            file: fileUrl,
            date: new Date(),
        };

        store
            .add(newMessage)
            .then((fullMessage) => {
                socket.io.emit("message", fullMessage);
                resolve(fullMessage);
            })
            .catch((e) => {
                reject(e);
            });
    });
};

const getMessages = (chat, userFilter) => {
    return store.list(chat, userFilter);
};

module.exports = {
    addMessage,
    getMessages,
};
