const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const isProduction = process.env.NODE_ENV === 'production';

mongoose
    .connect(process.env.MONGO_URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log('DB Connection Error: ' + err.message);
    });

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// set static dir
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/api', indexRouter);
app.use('/api/user', userRouter);

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
    app.use(function (err, req, res, next) {
        console.log(123123123);

        typeof err.stack !== 'undefined' && console.log(err.stack);

        res.status(err.status || 500);

        res.json({
            'errors': {
                message: err.message,
                error: err
            }
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        'errors': {
            message: err.message,
            error: {}
        }
    });
});

module.exports = app;
