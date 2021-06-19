const User = require("../models/user.js");

exports.getAll = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Somethign errored out'
            });
        } else {
            res.send(data);
        }
    })
};