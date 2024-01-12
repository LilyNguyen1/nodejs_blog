const express = require('express')
const path = require('path')
const morgan = require('morgan')
const engine = require('express-handlebars').engine
const app = express()
const port = 3000

//HTTP logger 
app.use(morgan('combined'))

//Template engine
console.log(app)
app.engine('hbs', engine({  extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('path: ', path.join(__dirname, 'resources/views'))
//defaultLayout: 'main',
app.get('/', (req, res) => {  
  res.render('home')
})

app.get('/news', (req, res) => {  
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})