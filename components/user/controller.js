const ValidationError = require("../../errors/ValidationError");
const store = require("./store");

const addUser = (name) => {
    return new Promise((resolve, reject) => {
        let errors = [];
        if (!name) {
            console.error("[userController] No name");
            errors.push({ name: "Name is required" });
        }
        if (errors.length) {
            return reject(new ValidationError(errors));
        }
        const newUser = {
            name,
        };

        store
            .add(newUser)
            .then(() => {
                resolve(newUser);
            })
            .catch((e) => {
                reject(e);
            });
    });
};

const getUsers = () => {
    return store.list();
};

module.exports = {
    addUser,
    getUsers,
};
