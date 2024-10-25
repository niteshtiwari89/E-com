import foodModel from "../model/foodModel.js";
import fs from "fs";


//add food item

const addFood = async(req,res)=>{
    
    try {
        // let image_filename = "";
        // if (req.file) {
        //     image_filename = req.file.filename;
        // } else {
        //     throw new Error("No file uploaded");
        // }
        if (!req.files || req.files.length === 0) {
            throw new Error("No files uploaded");
        }

        const image_filenames = req.files.map(file => file.filename);

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filenames
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: error.message });
    }
}

//all food list 
const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error"})

    }
}

//remove food
const removeFood= async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`upload/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"food removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

export {addFood,listFood,removeFood}