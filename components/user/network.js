const express = require("express");
const ValidationError = require("../../errors/ValidationError");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/", (req, res) => {
    controller
        .getUsers()
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch((e) => {
            response.error(req, res, "Unexpected error", e);
        });
});

router.post("/", (req, res) => {
    controller
        .addUser(req.body.name)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((e) => {
            if (e instanceof ValidationError) {
                response.fail(req, res, e.data, 422);
            } else {
                response.error(req, res, "Unexpected error", e);
            }
        });
});

module.exports = router;
