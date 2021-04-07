const db = require("mongoose");

db.Promise = global.Promise;

const connect = (url) => {
    db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("[db] Connection successful");
        })
        .catch((e) => {
            console.error(e);
        });
};

module.exports = connect;
