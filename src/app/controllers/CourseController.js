const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    // [GET] /courses/:slug
    show(req, res) {
        // res.send('Course Details - ' + req.params.slug);
        // console.log(req.params.slug)
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)})
            })
            .catch(err => next(err))
    }
}

module.exports = new CourseController();
