const Model = require("./model");

const addChat = (chat) => {
    const newChat = new Model(chat);
    return newChat.save();
};

const getChats = (userId) => {
    return new Promise((resolve, reject) => {
        Model.find({ users: userId })
            .populate("users")
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
    add: addChat,
    list: getChats,
};
