const Course = require('../models/Course');
const { multipleMongooseObjectToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseObjectToObject(courses),
                });
            })
            .catch(next);

        // res.render('home');
    }

    // [GET] /Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
