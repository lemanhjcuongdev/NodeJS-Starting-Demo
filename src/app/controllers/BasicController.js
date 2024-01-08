import Course from '../models/Course.js';
import { multipleMongoosesToObject } from '../../utils/mongoose.js';

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

export default new BasicController();
