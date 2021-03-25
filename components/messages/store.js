const db = require("mongoose");
const Model = require("./model");

db.Promise = global.Promise;
db.connect(
    "mongodb+srv://mongo:mongo@example.sxmuc.mongodb.net/example?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
console.log("[db] Connection successful");

const addMessage = (message) => {
    const newMessage = new Model(message);
    newMessage.save();
};

const getMessages = (userFilter) => {
    let filter = {};
    if (userFilter) {
        filter = { user: userFilter };
    }
    return Model.find(filter)
        .exec()
        .then((messages) => messages)
        .catch((e) => e);
};

module.exports = {
    add: addMessage,
    list: getMessages,
};
