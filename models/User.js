const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    email: {
        type: String,
        unique : true,
        required : true
    },
    password: {
        type: String,
        required : true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    }
});

let User = module.exports = mongoose.model('User', userSchema);

// Temporary test data
const userTestDataArray = [
    new User({
        email: 'yaroslav@mudryi.com',
        password: 'here will be some hash',
        firstName: 'Yaroslav',
        lastName: 'Mudryi',
        phone: '12345678'
    }),
    new User({
        email: 'test@test.com',
        password: 'here will be some hash',
        firstName: 'Bob',
        lastName: 'Alice',
        phone: '123123123'
    })
];

module.exports = mongoose.model('User', userSchema);
