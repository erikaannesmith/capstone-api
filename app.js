var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var cors = require('cors')
var index = require('./routes/index');
var users = require('./routes/users');
var usersApi = require('./routes/api/v1/users')
var designersApi = require('./routes/api/v1/designers')
var stylesApi = require('./routes/api/v1/styles')
var designerCommentsApi = require('./routes/api/v1/designerComments')
var styleCommentsApi = require('./routes/api/v1/styleComments')

var app = express();

// cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/v1/users', usersApi);
// app.use('/api/v1/auth/google_oauth2', authApi)
app.use('/api/v1/designers', designersApi)
app.use('/api/v1/designers/:id/styles', stylesApi)
app.use('/api/v1/designers/:id/comments', designerCommentsApi)
app.use('/api/v1/designers/:id/styles/:id/comments', styleCommentsApi)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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
