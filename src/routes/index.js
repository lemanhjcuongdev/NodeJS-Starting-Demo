const newsRouter = require('./news.js');
const basicRouter = require('./basic.js');
const courseRouter = require('./courses.js');

function route(app) {
    app.use('/news', newsRouter); //dùng use thay vì get
    app.use('/courses', courseRouter); //dùng use thay vì get

    app.use('/', basicRouter); //dùng use thay vì get
}

module.exports = route;
