const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

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
  app.use(express.static(path.join(__dirname, '../src/public')));
};

module.exports = configViewEngine;
