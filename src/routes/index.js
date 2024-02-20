const newsRouter = require('./news'); //lúc này newsRouter chính là router ở news.js, vì khi export ra ngoài, file nào import thì phải đổi tên tránh gây nhầm lần.
const siteRouter = require('./site');
const coursesRouter = require('./courses');


function route(app) {
    app.use('/news', newsRouter);//khi nào user vào path này thì controler này sẽ hoạt động

    app.use('/', siteRouter); //should put / in the end, put /news or /search before /

    app.use('/courses', coursesRouter);
}

module.exports = route;
