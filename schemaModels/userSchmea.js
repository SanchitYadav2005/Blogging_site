const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    imgUrl: String,
    fname: String,
    lname: String,
    email:String,
    password:String,
    mobile:Number,
    country: String,
    city:String
});

module.exports = mongoose.model('User', UserSchema);