const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path'),
    { dirname } = require('path');
const { fileURLToPath } = require('url');
const route = require('./routes/index.js');
const connect = require('./config/db/index.js');

//CONNECT DB
connect();

const app = express();
const port = 3000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

//Define static route
app.use(express.static(path.join(__dirname, 'public')));

//POST method processor: body parser - querystring parsing
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP Logger
app.use(morgan('combined'));

//Template Engine: set views
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

//listen port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
