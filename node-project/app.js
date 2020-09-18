var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 引入的token文件=========================================================================
var jwtAuth = require('./utils/jwt');
//连接数据库
require('./dao/database/database');


var adminRouter = require('./routes/admin');
var imagesRouter = require('./routes/images');//图片上传一级路径
var gymRouter = require('./routes/gym');
var studentsRouter = require('./routes/students');
var coachesRouter = require('./routes/coaches');
var ordersRouter = require('./routes/orders');
var carouselRouter = require('./routes/carousel');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//跨域中间件
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type,token,x-requested-with");
  // res.setHeader('Access-Control-Allow-Methods',"DELETE")
  next();
});

//在所有一级路径前启用token拦截===============================================
// app.use(jwtAuth);

//路由地址

app.use('/admin', adminRouter);
app.use('/images', imagesRouter);
app.use('/gym', gymRouter);
app.use('/students', studentsRouter);
app.use('/coaches', coachesRouter);
app.use('/orders', ordersRouter);
app.use('/carousel', carouselRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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

// module.exports = app;
app.listen(4000, () => console.log('4000 端口启动成功！'));
