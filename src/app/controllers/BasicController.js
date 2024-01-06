import Course from '../models/Course.js';

class BasicController {
    //[GET] /
    index(req, res) {
        // res.render('home');
        Course.find().then((courses) => {
            if (courses.length > 0) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        });
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default new BasicController();
