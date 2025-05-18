const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //   News Router
    app.use('/news', newsRouter);

    //   Site
    app.use('/', siteRouter);
}

module.exports = route;
