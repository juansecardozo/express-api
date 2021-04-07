const Model = require("./model");

const addMessage = (message) => {
    const newMessage = new Model(message);
    return newMessage.save();
};

const getMessages = (chat, userFilter) => {
    return new Promise((resolve, reject) => {
        let filter = { chat };
        if (userFilter) {
            filter["user"] = userFilter;
        }

        Model.find(filter)
            .populate(["user", "chat"])
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }

                resolve(populated);
            });
    });
};

module.exports = {
    add: addMessage,
    list: getMessages,
};
