const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override')
const engine = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //this is middleware to execute data from <form> or any HTML

app.use(express.json()); //this is the middleware to execute date from JS library or code JS such as HTMLRequest, axios, fetch,...

//HTTP logger
app.use(morgan('combined')); 

//methodOverride
app.use(methodOverride('_method'))

//Template engine
app.engine(
    'hbs', 
    engine({ 
        extname: '.hbs',
        helpers: { //here: helper định nghĩa hàm gì làm việc gì, thì ở view sẽ gọi hàm đó và truyền đối số vào
            sum (a, b)  { return a + b; },
        }
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('path: ', path.join(__dirname, 'resources/views'))
//defaultLayout: 'main',

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

// mongod --dbpath ~/Documents/datadb/data/db
