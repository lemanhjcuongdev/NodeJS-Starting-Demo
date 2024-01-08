import { mongooseToObject } from '../../utils/mongoose.js';
import Course from '../models/Course.js';

class CourseController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('course/show', { course: mongooseToObject(course) }),
            )
            .catch(next);
    }
}

export default new CourseController();
