const express = require("express");
const ValidationError = require("../../errors/ValidationError");
const router = express.Router({ mergeParams: true });
const response = require("../../network/response");
const controller = require("./controller");
const multer = require("multer");
const upload = multer({
    dest: "public/files",
});

router.get("/", (req, res) => {
    let userFilter = req.query.user || null;
    controller
        .getMessages(req.params.chat, userFilter)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((e) => {
            response.error(req, res, "Unexpected error", e);
        });
});

router.post("/", upload.single("file"), (req, res) => {
    controller
        .addMessage(req.body.user, req.body.message, req.params.chat, req.file)
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
