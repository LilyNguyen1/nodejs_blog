const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // res.send('Course Details - ' + req.params.slug);
        // console.log(req.params.slug)
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)})
            })
            .catch(next)
    }

    //GET /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //POST /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => {
                res.redirect('/')

            })
            .catch(next)
    }
}

module.exports = new CourseController(); 
