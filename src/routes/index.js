const newsRouter = require('./news') //lúc này newsRouter chính là router ở news.js, vì khi export ra ngoài, file nào import thì phải đổi tên tránh gây nhầm lần. 
const siteRouter = require('./site')

function route(app) {
  app.use('/news', newsRouter)

  app.use('/', siteRouter)//should put / in the end, put /news or /search before /

}

module.exports = route
