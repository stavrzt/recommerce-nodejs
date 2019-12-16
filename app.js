var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv').config();
var mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log('DB Connection Error: ' + err.message);
    });

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// set static dir
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/api', indexRouter);

module.exports = app;
