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
import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const foodRoutes = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadDir = path.join(__dirname, '../upload'); // Use __dirname for an absolute path


// Set up storage engine
const storage = multer.diskStorage({
         destination: (req, file, cb) => {
        cb(null, uploadDir); // Specify the destination folder for uploads
    },
  filename:(req,file,cb)=>{
         return cb(null,`${Date.now()}${file.originalname}`);}
});
const upload = multer({ storage });

// Endpoints
foodRoutes.post("/add", upload.array("images", 10), addFood);
foodRoutes.get("/list", listFood);
foodRoutes.post("/remove", removeFood);

export default foodRoutes;
