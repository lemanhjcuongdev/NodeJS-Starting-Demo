const Course = require('../models/Course.js');
const { multipleMongoosesToObject } = require('../../utils/mongoose.js');

class BasicController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    //convert Mongoose Object to Native Object
                    courses: multipleMongoosesToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new BasicController();
