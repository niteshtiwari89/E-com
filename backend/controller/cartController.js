import userModel from "../model/userModel.js";

// add items to the users cart
const addToCart = async(req,res)=>{
    try {
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"added to cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//remove items from the users cart 
const removeFromCart = async(req,res)=>{
    try {
        let userData =await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"removed from cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//fetch user cart data
// const getCart = async(req,res)=>{
//     try {
//         let userData =await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         res.json({success:true,cartData})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }
const getCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const cartData = userData.cartData || {}; // Ensure cartData is defined
        res.json({ success: true, cartData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error retrieving cart data" });
    }
};


export{addToCart,removeFromCart,getCart}