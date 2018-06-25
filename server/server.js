var express             = require('express');
var app                 = express();
var mongoose            = require('mongoose');
var logger              = require('morgan');
var cors                = require('cors');

var databaseConfig      = require('./config/database');
var routes              = require('./app/routes');

mongoose.connect(databaseConfig.url);

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

router(app);