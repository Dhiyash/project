const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    firstName: { type : String },
    userName: { type : String },
    contact: { type : String },
    lastName: { type : String },
    gender: { type : String },
    password: { type : String }
},{
    timestamps: true,
})

const signup_data = mongoose.model('collection1', signupSchema);

module.exports = signup_data;