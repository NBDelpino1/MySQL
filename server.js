var express = require("express");
var app = express();
var exphbs = require('express-handlebars');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var mysql      = require('mysql');