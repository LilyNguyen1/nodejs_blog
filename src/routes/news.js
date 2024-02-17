const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewsController');

//We will separate: path we will write in news.js, function handler we will write in NewsController.js
//newController now is a new object, also a function handler created from NewController, so it can access to NewController by newController.index
//newController.index

router.get('/:slug', newController.show);
router.get('/', newController.index); //thay vì viết thẳng (req, res) => {res.render('news');}, lúc này ta đã tách ra module, nên logic cũng giống nhau, và chạy bình thường.

module.exports = router;
