const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.home); //thay vì viết thẳng (req, res) => {res.render('news');}, lúc này ta đã tách ra module, nên logic cũng giống nhau, và chạy bình thường.

module.exports = router;
