const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_mongodb_dev',
            // { useCreateIndex: true, }// admin have problem here, but we haven't
        );
        console.log('Successfully!!!')//check/test connect or not
    }
    catch (err) {
        console.log('Fail!')
    }
}

module.exports = { connect }