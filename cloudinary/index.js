const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');

// configured cloudinary using cloudinary moduel.
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
// added how to store and cofigure the file and format are accepted to store
const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: 'Blogsite',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}