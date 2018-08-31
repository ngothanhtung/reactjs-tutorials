var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// CORS
var cors = require('cors');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var productRouter = require('./routes/product');
var galleryRouter = require('./routes/gallery');
var onlineshopRouter = require('./routes/onlineshop');
var firebaseRouter = require('./routes/firebase');
var uploadFileRouter = require('./routes/uploadFile');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/gallery', galleryRouter);
app.use('/onlineshop', onlineshopRouter);
app.use('/firebase', firebaseRouter);
app.use('/uploadFile', uploadFileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;