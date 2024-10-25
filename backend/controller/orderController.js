import orderModel from "../model/orderModel.js";
import userModel from "../model/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const placeOrder = async (req, res) => {
    const frontend_url = "https://e-com-flame.vercel.app/order";

    try {
        const conversionRate = 100; // Assuming conversion rate for USD to INR
        const { userId, items, address, amount } = req.body;

        // Validate request body
        if (!userId || !items || !Array.isArray(items) || items.length === 0 || !address || !amount) {
            return res.status(400).json({ success: false, message: "Invalid order data" });
        }

        // Prepare line items for Stripe
        const line_items = items.map(item => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(item.price * conversionRate), // Convert to paise
            },
            quantity: item.quantity,
        }));

        // Add delivery charges
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges",
                },
                unit_amount: 80 * conversionRate, // Delivery charges in paise
            },
            quantity: 1,
        });

        const order = await orderModel.create({
            userId,
            items,
            address,
            amount,
            payment: false, // Initially set payment status to false
        });
        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify/?success=true&orderId=${order._id}`,
            cancel_url: `${frontend_url}/verify/?success=false&orderId=${order._id}`,
        });

        // Return session URL without saving the order yet
        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ success: false, message: "Error placing order", error: error.message });
    }
};

// const placeOrder = async (req, res) => {
//     const frontend_url = "http://localhost:5173/order";

//     try {
//         const conversionRate = 83; // Assuming conversion rate for USD to INR
//         const { userId, items, address, amount } = req.body;

//         // Validate request body
//         if (!userId || !items || !Array.isArray(items) || items.length === 0 || !address || !amount) {
//             return res.status(400).json({ success: false, message: "Invalid order data" });
//         }

//         // Create a new order
//         const newOrder = new orderModel({
//             userId,
//             items,
//             amount: amount * conversionRate,
//             address,
//             currency: 'INR', // Currency in INR
//             payment: false, // Initially, set payment status to false
//         });

//         await newOrder.save();
//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         // Prepare line items for Stripe
//         const line_items = items.map(item => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.name,
//                 },
//                 unit_amount: item.price * 100 * conversionRate, // Convert to paise
//             },
//             quantity: item.quantity,
//         }));

//         // Add delivery charges
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges",
//                 },
//                 unit_amount: 200 * conversionRate, // Delivery charges in paise
//             },
//             quantity: 1,
//         });

//         // Create Stripe checkout session
//         const session = await stripe.checkout.sessions.create({
//             line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify/?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify/?success=false&orderId=${newOrder._id}`,
//         });

//         res.json({ success: true, session_url: session.url });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ success: false, message: "Error placing order", error: error.message });
//     }
// };

// const placeOrder = async (req, res) => {
//     const frontend_url = "http://localhost:5173/order";
//     try {
//         const conversionRate = 83; // Assuming conversion rate for USD to INR
//         const { userId, items, address, amount } = req.body;

//         // Validate request body
//         if (!userId || !items || !Array.isArray(items) || items.length === 0 || !address || !amount) {
//             return res.status(400).json({ success: false, message: "Invalid order data" });
//         }

//         // Prepare line items for Stripe
//         const line_items = items.map(item => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.name,
//                 },
//                 unit_amount: item.price * 100 * conversionRate, // Convert to paise
//             },
//             quantity: item.quantity,
//         }));

//         // Add delivery charges
//         const deliveryCharges = 200 * conversionRate; // Delivery charges in paise
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges",
//                 },
//                 unit_amount: deliveryCharges,
//             },
//             quantity: 1,
//         });

//         // Create Stripe checkout session
//         const session = await stripe.checkout.sessions.create({
//             line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify/?success=true&userId=${userId}`,
//             cancel_url: `${frontend_url}/verify/?success=false`,
//         });

//         // Save the order temporarily in the session
//         req.session.orderData = {
//             userId,
//             items,
//             amount: amount * conversionRate,
//             address,
//             currency: 'INR',
//             payment: false,
//         };

//         res.json({ success: true, session_url: session.url });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ success: false, message: "Error placing order" });
//     }
// };

// Place Order
// const placeOrder = async (req, res) => {
//     const frontend_url = "http://localhost:5173/order";
//     try {
//         const conversionRate = 83; // Assuming conversion rate for USD to INR
//         const { userId, items, address, amount } = req.body;

//         // Validate request body
//         if (!userId || !items || !Array.isArray(items) || items.length === 0 || !address || !amount) {
//             return res.status(400).json({ success: false, message: "Invalid order data" });
//         }

//         // Create a new order
//         const newOrder = new orderModel({
//             userId,
//             items,
//             amount: amount * conversionRate,
//             address,
//             currency: 'INR', // Currency in INR
//             payment: false, // Initially, set payment status to false
//         });

//         await newOrder.save();
//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         // Prepare line items for Stripe
//         const line_items = items.map(item => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.name,
//                 },
//                 unit_amount: item.price * 100 * conversionRate, // Convert to paise
//             },
//             quantity: item.quantity,
//         }));

//         // Add delivery charges
//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges",
//                 },
//                 unit_amount: 200 * conversionRate, // Delivery charges in paise
//             },
//             quantity: 1,
//         });

//         // Create Stripe checkout session
//         const session = await stripe.checkout.sessions.create({
//             line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify/?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify/?success=false&orderId=${newOrder._id}`,
//         });

//         res.json({ success: true, session_url: session.url });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ success: false, message: "Error placing order" });
//     }
// };

// Verify Order
// const verifyOrder = async (req, res) => {
//     const { orderId, success } = req.query;
//     try {
//         if (!orderId) {
//             return res.status(400).json({ success: false, message: "Order ID is required." });
//         }

//         if (success === "true") {
//             // Update order to indicate payment success
//             await orderModel.findByIdAndUpdate(orderId, { payment: true });
//             res.json({ success: true, message: "Payment successful" });
//         } else {
//             // Delete order if payment was unsuccessful
//             await orderModel.findByIdAndDelete(orderId);
//             res.json({ success: false, message: "Payment not completed" });
//         }
//     } catch (error) {
//         console.error("Error verifying order:", error);
//         res.status(500).json({ success: false, message: "Error verifying order" });
//     }
// };

const verifyOrder = async (req, res) => {
    const { orderId, success } = req.query;

    try {
        if (!orderId) {
            return res.status(400).json({ success: false, message: "Order ID is required." });
        }
        const order = await orderModel.findById(orderId);
        if (success === "true") {
            // Update the order after successful payment 
            await orderModel.findByIdAndUpdate(orderId, { payment: true });

            // This will remove the cart items of user after successful payment
            await userModel.findByIdAndUpdate(order.userId, { cartData: {} });

            
            res.json({ success: true, message: "Payment successful" });
        } else {
            const items = order.items;
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Payment not completed", items: items });

        }
    } catch (error) {
        console.error("Error verifying order:", error);
        res.status(500).json({ success: false, message: "Error verifying order", error: error.message });
    }
};



// Fetch User Orders
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ success: false, message: "Error fetching user orders" });
    }
};

// List All Orders (Admin)
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ success: false, message: "Error fetching orders" });
    }
};

// Update Order Status
const updateStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        if (!orderId || !status) {
            return res.status(400).json({ success: false, message: "Invalid order ID or status" });
        }
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: "Order status updated" });
    } catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).json({ success: false, message: "Error updating order status" });
    }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };


// import orderModel from "../model/orderModel.js";
// import userModel from "../model/userModel.js";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // Place Order
// const placeOrder = async (req, res) => {
//     const frontend_url = "http://localhost:5173/order";
//     try {
//         const conversionRate = 83; // Assuming conversion rate for USD to INR
//         const { userId, items, address } = req.body;

//         // Create a new order
//         const newOrder = new orderModel({
//             userId,
//             items,
//             amount: req.body.amount * conversionRate,
//             address,
//             currency: 'INR', // Currency in INR
//             payment: false, // Initially, set payment status to false
//         });

//         await newOrder.save();
//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         // Prepare line items for Stripe
//         const line_items = items.map(item => ({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: item.name,
//                 },
//                 unit_amount: item.price * 100 * conversionRate, // Convert to paise
//             },
//             quantity: item.quantity,
//         }));

//         line_items.push({
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: "Delivery Charges",
//                 },
//                 unit_amount: 200 * conversionRate, // Delivery charges in paise
//             },
//             quantity: 1,
//         });

//         // Create Stripe checkout session
//         const session = await stripe.checkout.sessions.create({
//             line_items,
//             mode: 'payment',
//             success_url: `${frontend_url}/verify/?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify/?success=false&orderId=${newOrder._id}`,
//         });

//         res.json({ success: true, session_url: session.url });
//     } catch (error) {
//         console.error(error);
//         res.json({ success: false, message: "Error placing order" });
//     }
// };

// // Verify Order
// const verifyOrder = async (req, res) => {
//     const { orderId, success } = req.query; // Use query parameters to retrieve orderId and success status
//     try {
//         if (success === "true") {
//             // Update order to indicate payment success
//             await orderModel.findByIdAndUpdate(orderId, { payment: true });
//             res.json({ success: true, message: "Payment successful" });
//         } else {
//             // Delete order if payment was unsuccessful
//             await orderModel.findByIdAndDelete(orderId);
//             res.json({ success: false, message: "Payment not completed" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.json({ success: false, message: "Error verifying order" });
//     }
// };

// // Fetch User Orders
// const userOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({ userId: req.body.userId });
//         res.json({ success: true, data: orders });
//     } catch (error) {
//         console.error(error);
//         res.json({ success: false, message: "Error fetching user orders" });
//     }
// };

// // List All Orders (Admin)
// const listOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({});
//         res.json({ success: true, data: orders });
//     } catch (error) {
//         console.error(error);
//         res.json({ success: false, message: "Error fetching orders" });
//     }
// };

// // Update Order Status
// const updateStatus = async (req, res) => {
//     try {
//         await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
//         res.json({ success: true, message: "Order status updated" });
//     } catch (error) {
//         console.error(error);
//         res.json({ success: false, message: "Error updating order status" });
//     }
// };

// export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };


// // import orderModel from "../model/orderModel.js";
// // import userModel from "../model/userModel.js";
// // import Stripe from "stripe";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// // //placing order using frontend

// // const placeOrder = async (req, res) => {
// //     const frontend_url = "http://localhost:5173/order"
// //     try {
// //         // const newOrder = new orderModel({
// //         //     userId:req.body.userId,
// //         //     items:req.body.items,
// //         //     amount:req.body.amount,
// //         //     address:req.body.address
// //         // })
// //         const conversionRate = 83;

// //         const newOrder = new orderModel({
// //             userId: req.body.userId,
// //             items: req.body.items,
// //             amount: req.body.amount * conversionRate, // convert USD to INR
// //             address: req.body.address,
// //             currency: 'INR' // explicitly set the currency to INR
// //         });

// //         await newOrder.save();
// //         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

// //         const line_items = req.body.items.map((item) => ({
// //             price_data: {
// //                 currency: "inr",
// //                 product_data: {
// //                     name: item.name
// //                 },
// //                 unit_amount: item.price * 100 * 80
// //             },
// //             quantity: item.quantity
// //         }))
// //         line_items.push({
// //             price_data: {
// //                 currency: "inr",
// //                 product_data: {
// //                     name: "Delivery Charges"
// //                 },
// //                 unit_amount: 2 * 100 * 80
// //             },
// //             quantity: 1
// //         })
// //         const session = await stripe.checkout.sessions.create({
// //             line_items: line_items,
// //             mode: 'payment',
// //             success_url: `${frontend_url}/verify/?success=true&orderId=${newOrder._id}`,
// //             cancel_url: `${frontend_url}/verify/?success=false&orderId=${newOrder._id}`,
// //         })
// //         res.json({ success: true, session_url: session.url })
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "Error" })
// //     }
// // }

// // const verifyOrder = async (req, res) => {
// //     const { orderId, success } = req.query;
// //     try {
// //         if (success == "true") {
// //             await orderModel.findByIdAndUpdate(orderId, { payment: true });
// //             res.json({ success: true, message: "paid" })
// //         }
// //         else {
// //             await orderModel.findByIdAndDelete(orderId);
// //             res.json({ success: false, message: "Not paid" })
// //         }
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "Error" })
// //     }
// // }

// // //users orders for frontend
// // const userOrders = async (req, res) => {
// //     try {
// //         const orders = await orderModel.find({ userId: req.body.userId });
// //         res.json({ success: true, data: orders })
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "Error" })
// //     }
// // }

// // //listing orders from admin panel
// // const listOrders = async (req, res) => {
// //     try {
// //         const orders = await orderModel.find({})
// //         res.json({ success: true, data: orders })
// //     } catch (error) {
// //         console.log(error)
// //         res.json({ success: false, message: "Error" })
// //     }
// // }

// // //api for updating order status
// // const updateStatus = async (req, res) => {
// //     try {
// //         await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status })
// //         res.json({ success: true, message: "status Updated" })
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: "ERROR" })
// //     }
// // }
// // export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };













// // // for razorpay

// // // import orderModel from "../model/orderModel.js";
// // // import userModel from "../model/userModel.js";
// // // import Razorpay from "razorpay";

// // // const razorpay = new Razorpay({
// // //     key_id: process.env.RAZORPAY_KEY_ID,
// // //     key_secret: process.env.RAZORPAY_KEY_SECRET
// // // });

// // // const placeOrder = async (req, res) => {
// // //     const frontend_url = "http://localhost:5173";
// // //     try {
// // //         const newOrder = new orderModel({
// // //             userId: req.body.userId,
// // //             items: req.body.items,
// // //             amount: req.body.amount,
// // //             address: req.body.address
// // //         });

// // //         await newOrder.save();
// // //         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

// // //         // Calculate total amount in paise (Razorpay uses smallest currency unit)
// // //         const totalAmount = req.body.amount * 100;

// // //         const options = {
// // //             amount: totalAmount,
// // //             currency: "INR",
// // //             receipt: newOrder._id.toString(),
// // //             notes: {
// // //                 orderId: newOrder._id.toString()
// // //             }
// // //         };

// // //         const razorpayOrder = await razorpay.orders.create(options);

// // //         res.json({
// // //             success: true,
// // //             order_id: razorpayOrder.id,
// // //             amount: totalAmount,
// // //             key: process.env.RAZORPAY_KEY_ID,
// // //             product_name: "Your Product Name",
// // //             description: "Order for your products",
// // //             contact: "Customer Phone Number",
// // //             name: "Customer Name",
// // //             email: "customer@example.com"
// // //         });
// // //     } catch (error) {
// // //         console.log(error);
// // //         res.json({ success: false, message: "Error" });
// // //     }
// // // };

// // // //users orders for frontend
// // // const userOrders = async (req, res) => {
// // //     try {
// // //         const orders = await orderModel.find({ userId: req.body.userId });
// // //         res.json({ success: true, data: orders })
// // //     } catch (error) {
// // //         console.log(error);
// // //         res.json({ success: false, message: "Error" })
// // //     }
// // // }

// // // //listing orders from admin panel
// // // const listOrders = async (req, res) => {
// // //     try {
// // //         const orders = await orderModel.find({})
// // //         res.json({ success: true, data: orders })
// // //     } catch (error) {
// // //         console.log(error)
// // //         res.json({ success: false, message: "Error" })
// // //     }
// // // }

// // // //api for updating order status
// // // const updateStatus = async (req, res) => {
// // //     try {
// // //         await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status })
// // //         res.json({ success: true, message: "status Updated" })
// // //     } catch (error) {
// // //         console.log(error);
// // //         res.json({ success: false, message: "ERROR" })
// // //     }
// // // }

// // // const verifyOrder = async (req, res) => {
// // //     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

// // //     const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
// // //     shasum.update(${ razorpay_order_id } | ${ razorpay_payment_id });
// // //     const digest = shasum.digest("hex");

// // //     if (digest === razorpay_signature) {
// // //         // Payment is legitimate
// // //         const order = await orderModel.findOne({ "notes.orderId": razorpay_order_id });
// // //         if (order) {
// // //             order.payment = true;
// // //             order.razorpay_order_id = razorpay_order_id;
// // //             order.razorpay_payment_id = razorpay_payment_id;
// // //             await order.save();
// // //             res.json({ success: true, message: "Payment verified successfully" });
// // //         } else {
// // //             res.json({ success: false, message: "Order not found" });
// // //         }
// // //     } else {
// // //         res.json({ success: false, message: "Invalid signature" });
// // //     }
// // // };

// // // // Other functions (userOrders, listOrders, updateStatus) remain the same

// // // export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };