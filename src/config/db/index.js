const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');

        console.log('Connect DB Successfully!');
    } catch (error) {
        console.log('Connect DB Failed!');
    }
}

module.exports = connect;
