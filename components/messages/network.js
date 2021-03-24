const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/", (req, res) => {
    // console.log(req.headers);
    /* res.header({
        "custom-header": "Custom value",
    }); */
    if (req.query.error == "OK") {
        response.error(req, res, "Unexpected error", "Error details");
    } else {
        response.success(req, res, {});
    }
});

router.post("/", (req, res) => {
    response.success(req, res, req.body, 201);
});

module.exports = router;
