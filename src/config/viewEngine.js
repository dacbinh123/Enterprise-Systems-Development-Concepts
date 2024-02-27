const path = require('path')
const express = require('express')
const Handlebars = require('handlebars')
const bodyParser = require('body-parser')
const session = require("express-session")
const cookieParser = require('cookie-parser')
const i18n = require("i18n");
const handlebars = require('express-handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const configViewEngine = (app) => {
  // Set view engine
  app.engine('.hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '../resources/views/layouts'),
    partialsDir: path.join(__dirname, '../resources/views/partials'),
  }));
  app.set('view engine', '.hbs');
  app.set('views', path.join(__dirname, '../resources/views'));

  // Config static file
  app.use(express.static(path.join('./src', 'public')))
  app.use(bodyParser.urlencoded({ extended: true }));//body parser
  app.use(bodyParser.json()); //bodyparser json
  app.use(cookieParser())
  app.use(express.urlencoded());
  app.use(express.json())
};

module.exports = configViewEngine;
