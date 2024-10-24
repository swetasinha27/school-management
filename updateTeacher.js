const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/schoolDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const Class = require('./models/Class');
        return Class.updateOne(
            { _id: new mongoose.Types.ObjectId('67160dbce9a271097ef862c7') },
            { $set: { teacher: new mongoose.Types.ObjectId('67162436e9a271097ef862c9') } }
        );
    })
    .then(result => {
        console.log('Update successful:', result);
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error:', err);
    });
