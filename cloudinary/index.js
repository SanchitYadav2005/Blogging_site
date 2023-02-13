const cloudinary = require('cloudinary').v2;
const {cloudinaryStroage} = require('multer-storage-cloudinary');
// configered cloudinary 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
// defining how the image will be stored

const storage = new cloudinaryStroage({
    cloudinary,
    params:{
        folder: "blogsite",
        allowedFormats:['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
}
