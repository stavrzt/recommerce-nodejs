const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
let User = require('../models/User');

/* Post user signup data */
router.post('/signup', function (req, res, next) {
    User
        .findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.status(409).json({
                    message: req.body.email + " is already exists. Please use a different email address."
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        next(err);
                    } else {
                        const user = new User({
                            email: req.body.email,
                            password: hash
                        });

                        user
                            .save()
                            .then((result) => {
                                res.status(201).json({
                                    message: 'Thank you for signing up.'
                                });
                            })
                            .catch(error => next(error));
                    }
                });
            }
        })
        .catch((error) => next(error));
});

module.exports = router;
