const ValidationError = require("../../errors/ValidationError");
const store = require("./store");

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        let errors = [];
        if (!user) {
            console.error("[messageController] No user");
            errors.push({ user: "User is required" });
        }
        if (!message) {
            console.error("[messageController] No message");
            errors.push({ message: "Message is required" });
        }
        if (errors.length) {
            return reject(new ValidationError(errors));
        }
        const newMessage = {
            user,
            message,
            date: new Date(),
        };

        store.add(newMessage);

        resolve(newMessage);
    });
};

const getMessages = (userFilter) => {
    return new Promise((resolve, reject) => {
        store
            .list(userFilter)
            .then((messageList) => {
                resolve(messageList);
            })
            .catch((e) => {
                reject(e);
            });
    });
};

module.exports = {
    addMessage,
    getMessages,
};
