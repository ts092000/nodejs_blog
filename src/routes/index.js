const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // Local host --- Hosting

    // Action ---> Dispatcher ---> Function Handler
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
