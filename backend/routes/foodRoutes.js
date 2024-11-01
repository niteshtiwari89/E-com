// import express from 'express'
// import { addFood, listFood, removeFood } from '../controller/foodController.js'

// import multer from "multer"

// const foodRoutes = express.Router();

// //image storage engine

// // const storage= multer.diskStorage({
// //     destination:"upload",
// //     filename:(req,file,cb)=>{
// //         return cb(null,`${Date.now()}${file.originalname}`)
// //     }
// // })
// const storage = multer.memoryStorage(); // Changed to memoryStorage
// const upload = multer({ storage });
// // const upload= multer({storage:storage})
// // upload.single("image"),
// //ednpoints
// foodRoutes.post("/add",upload.array("images[]",10),addFood);
// foodRoutes.get("/list",listFood);
// foodRoutes.post("/remove",removeFood);


// export default foodRoutes;


import express from 'express';
import { addFood, listFood, removeFood } from '../controller/foodController.js';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';

// const cloudinary = require('../config/cloudinary.js');


const foodRoutes = express.Router();

// Set up storage engine
const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'upload'
    }
});


const upload = multer({ storage });

// Endpoints
foodRoutes.post("/add", upload.array("images", 10), addFood);
foodRoutes.get("/list", listFood);
foodRoutes.post("/remove", removeFood);

export default foodRoutes;
