import foodModel from "../model/foodModel.js";
import cloudinary from '../config/cloudinary.js'


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

        //  const uploadPromises = req.files.map(file => {
        //     return cloudinary.uploader.upload(file.path); // Use file.path for Cloudinary
        // });

         const uploadPromises = req.files.map(file => cloudinary.uploader.upload(file.path));


        const uploadResults = await Promise.all(uploadPromises);    

        const image_filenames = uploadResults.map(result => result.secure_url);

        console.log('Uploaded Image URLs:', image_filenames);

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
// const removeFood= async (req,res)=>{
//     try {
//         const food = await foodModel.findById(req.body.id)
//         fs.unlink(`upload/${food.image}`,()=>{})
//         await foodModel.findByIdAndDelete(req.body.id)
//         res.json({success:true,message:"food removed"})
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:"error"})
//     }
// }

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            throw new Error("Food item not found");
        }

        // Remove images from Cloudinary
        const deletePromises = food.image.map(imageUrl => {
            const publicId = imageUrl.split('/').pop().split('.')[0]; // Extract public ID from URL
            return cloudinary.uploader.destroy(publicId);
        });

        await Promise.all(deletePromises);
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" });
    }
};

export {addFood,listFood,removeFood}
