const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    // Local host --- Hosting

    // Action ---> Dispatcher ---> Function Handler
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);

    app.use('/', siteRouter);
}

module.exports = route;
