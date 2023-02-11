const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

// XMLHttpRequest, fetch, axios, ...
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views','./src/resources/views');

//Route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body);

  res.send('');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});