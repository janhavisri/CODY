const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    fullname: String,
    email: String,
    heroimage: String,
    url: String,
    contact: String,
    experience: String,
})

const model = mongoose.model('review', schema);

module.exports = model;