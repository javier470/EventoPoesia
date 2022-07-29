'use strict'

const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    carnet: String,
    name: String,
    address: String,
    gender: String,
    phone: String,
    birthDate: Date,
    subject: String,
    themeGender: String,
    inscription: String,
    exhibitioDate : Date
})

module.exports = mongoose.model('RegisterForm', formSchema);