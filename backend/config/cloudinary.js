// import {v2 as cloudinary} from 'cloudinary';
// const cloudinary = require('cloudinary').v2;

import cloudinaryPkg from 'cloudinary'; // Default import
const { v2: cloudinary } = cloudinaryPkg; 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export default cloudinary;


