import express from 'express'
import { addFood, listFood, removeFood } from '../controller/foodController.js'

import multer from "multer"

const foodRoutes = express.Router();

//image storage engine

// const storage= multer.diskStorage({
//     destination:"upload",
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })
const storage = multer.memoryStorage(
  {
    destination: (req, file, cb) => {
        cb(null, 'upload'); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Create a unique filename
    }
}
); // Changed to memoryStorage
const upload = multer({ storage });
// const upload= multer({storage:storage})
// upload.single("image"),
//ednpoints
foodRoutes.post("/add",upload.array("images[]",10),addFood);
foodRoutes.get("/list",listFood);
foodRoutes.post("/remove",removeFood);


export default foodRoutes;
