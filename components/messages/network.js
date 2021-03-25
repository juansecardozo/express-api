const express = require("express");
const ValidationError = require("../../errors/ValidationError");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/", (req, res) => {
    let userFilter = req.query.user || null;
    controller
        .getMessages(userFilter)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((e) => {
            if (e instanceof ValidationError) {
                response.fail(req, res, e.data, 422);
            } else {
                response.error(req, res, "Unexpected error", e);
            }
        });
});

router.post("/", (req, res) => {
    controller
        .addMessage(req.body.user, req.body.message)
        .then((message) => {
            response.success(req, res, message, 201);
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
