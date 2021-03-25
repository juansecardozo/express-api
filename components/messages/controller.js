const store = require("./store");

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        let err = new ReferenceError();
        if (!user) {
            console.error("[messageController] No user");
            err.data = { user: "User is required" };
            reject(err);
        }
        if (!message) {
            console.error("[messageController] No message");
            err.data = { message: "Message is required" };
            reject(err);
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

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
};

module.exports = {
    addMessage,
    getMessages,
};
