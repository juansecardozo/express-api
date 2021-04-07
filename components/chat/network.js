const express = require("express");
const ValidationError = require("../../errors/ValidationError");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/:userId", (req, res) => {
    controller
        .getChats(req.params.userId)
        .then((chatList) => {
            response.success(req, res, chatList, 200);
        })
        .catch((e) => {
            response.error(req, res, "Unexpected error", e);
        });
});

router.post("/", (req, res) => {
    controller
        .addChat(req.body.users)
        .then((chat) => {
            response.success(req, res, chat, 201);
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
