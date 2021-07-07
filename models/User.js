const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    _id: {
        type: Number,
        require: true
    },
    Administrator: {
        type: Boolean,
        required: true
    },
    post: [{
        type: String,
    }] 
});

mongoose.model('user', User);