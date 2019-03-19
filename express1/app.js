var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 请求路径导入
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var persons = require('./routes/persons')
// 跨域
var cors = require('cors');

var app = express();

// view engine setup
// 可视化
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.set('views', path.join(__dirname, 'views'));
// app.engine('.html', require('ejs').__express);
// app.set('view engine', 'html');

// cors 跨域
app.use(cors({
  // 允许访问链接
  origin:['http://localhost:8080'],
  // 允许状态为 200
  optionsSuccessStatus: 200,
  methods:['GET','POST']
  // alloweHeaders:['Conten-Type', 'Authorization']
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/persons', persons);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('服务器问题,请联系开发')
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
