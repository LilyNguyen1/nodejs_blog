const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);//khi nào user post(nghĩa là submit tạo 1 khoá học mới in this cáse) bằng path này thì controler này sẽ hoạt động
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);

module.exports = router;