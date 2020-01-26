const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

/* Post user signup data */
router.post('/signup', function (req, res, next) {
    User
        .findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.status(409).json({
                    message: req.body.email + ' is already exists. Please use a different email address.'
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

/* Post user login data */
router.post('/login', function (req, res, next) {
    User
        .findOne({email: req.body.email})
        .then((user) => {
            if (!user) res.status(401).json({message: 'Invalid email or password'});

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) res.status(401).json({message: 'Invalid email or password'});

                if (result) {
                    const token = jwt.sign({
                            email: user.email
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1d" // TODO: Should be implemented refresh-token functionality
                        });
                    return res.status(200).json({
                        email: user.email,
                        token: token
                    });
                }

                res.status(401).json({message: 'Invalid email or password'})
            })

        })
        .catch(err => next(err))
});

/* Get user My account  */
router.get('/myaccount', ensureAuthenticated, function (req, res, next) {
    res.status(200).json({
        message: 'Here will be My account data later'
    });
});

module.exports = router;
