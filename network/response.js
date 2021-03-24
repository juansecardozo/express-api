exports.success = (req, res, data, status = 200) => {
    res.status(status).send({
        status: "success",
        data,
    });
};

exports.fail = (req, res, data, status) => {
    res.status(status).send({
        status: "fail",
        data,
    });
};

exports.error = (req, res, message, details) => {
    console.error(`[response] ${details}`);
    res.status(500).send({
        status: "error",
        message,
    });
};
