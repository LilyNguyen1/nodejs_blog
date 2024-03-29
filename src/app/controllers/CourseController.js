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

    //POST /courses/store (tạo xong thì submit lưu vào data)
    store(req, res, next) {
        const formData = req.body
        formData.image = `http://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => {
                res.redirect('/me/stored-courses')// sau khi lưu xong thì chuyển hướng về home
            })
            .catch(next)
    }; 

    //GET /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then( course => {
                res.render('courses/edit', { course: mongooseToObject(course)})
            })
            .catch(next)
    }

    //PUT /courses/:id
    update(req, res, next) {
        Course.updateOne( { _id: req.params.id }, req.body)//first argument is condition/filter (will update document that matches this condition/filter), second argument is object we need to change
            .then( () => {
                res.redirect('/me/stored-courses')
            })
            .catch(next)
    }

    //PATCH /courses/:id/restore
    restore(req, res, next) {
        Course.restore( { _id: req.params.id })
            .then( () => {
                res.redirect('back')
            })
            .catch(next)
    }

    //DELETE /courses/:id
    delete(req, res, next) {
        Course.delete( { _id: req.params.id })//first argument is condition/filter (will update document that matches this condition/filter), second argument is object we need to change
            .then( () => {
                res.redirect('back') //or redirect 'courses/stored-courses'
            })
            .catch(next)
    }

     //DELETE /courses/:id/force
     forceDelete(req, res, next) {
        Course.findOneAndDelete( { _id: req.params.id } )//or method deleteOne works the same
            .then( () => {
                res.redirect('back') 
            })
            .catch(next)
    }
}

module.exports = new CourseController(); 
