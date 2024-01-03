import newsRouter from './news.js';
import basicRouter from './basic.js';

function route(app) {
    app.use('/news', newsRouter); //dùng use thay vì get
    app.use('/', basicRouter); //dùng use thay vì get
}

export default route;
