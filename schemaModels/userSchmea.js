const mongoose = require('mongoose');
const {Schema} = mongoose;
const ImageSchema = new Schema({
    url: String,
    fileName: String
})
const UserSchema = new Schema({
    image: [ImageSchema],
    fname: String,
    lname: String,
    email:String,
    password:String,
    mobile:Number,
    country: String,
    city:String
});

module.exports = mongoose.model('User', UserSchema);