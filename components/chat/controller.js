const ValidationError = require("../../errors/ValidationError");
const store = require("./store");

const addChat = (users) => {
    let errors = [];
    if (!users || !Array.isArray(users)) {
        console.error("[chatController] No users");
        errors.push({ users: "Users are required" });
    }
    if (errors.length) {
        return Promise.reject(new ValidationError(errors));
    }
    const newChat = {
        users,
    };

    return store.add(newChat);
};

const getChats = (userId) => {
    return store.list(userId);
};

module.exports = {
    addChat,
    getChats,
};
