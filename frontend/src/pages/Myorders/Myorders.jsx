import React, { useContext, useEffect, useState } from 'react';
import "./Myorders.css";
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const Myorders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(
                `${url}/api/order/userorders`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Use Authorization header
                    }
                }
            );
            setData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error('Error fetching orders:', error.response?.data || error.message);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My orders</h2>
            <div className="container">
            {data.length === 0 ? (
                    <p style={{textAlign:"center"}}>No orders found</p> // Message when no orders are available
                ) : (
                    [...data].reverse().map((order, index) => (
                        <div key={index} className="my-order-orders">
                            <img src={assets.parcel_icon} alt="" />
                            <p>
                                {order.items.map((item, index) => (
                                    index === order.items.length - 1
                                        ? `${item.name} x ${item.quantity}`
                                        : `${item.name} x ${item.quantity}, `
                                ))}
                            </p>
                            <p>₹{order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p><span>&#x25cf;</span><b> {order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Myorders;



// import React, { useContext, useEffect, useState } from 'react'
// import "./Myorders.css";
// import { StoreContext } from '../../Context/StoreContext';
// import axios from 'axios';
// import { assets } from '../../assets/assets';
// const Myorders = () => {

//     const {url,token}=useContext(StoreContext)
//     const [data,setData]= useState([]);

//     const fetchOrders = (async()=>{
//         const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
//         setData(response.data.data)
//         console.log(response.data.data)
//     })
//     useEffect(()=>{
//         if(token){
//             fetchOrders()
//         }
//     },[fetchOrders, token])
// return (
//     <div className='my-orders'>
//         <h2>My orders</h2>
//         <div className="container">
//             {data.map((order,index)=>{
//                 return(
//                     <div key={index} className="my-order-orders">
//                         <img src={assets.parcel_icon} alt="" />
//                         <p>{order.items.map((item,index)=>{
//                             if(index===order.items.length-1){
//                                 return item.name+" x "+item.quantity
//                             }
//                             else{
//                                 return item.name+" x "+item.quantity+", "
//                             }
//                         })}</p>
//                         <p>₹{order.amount}.00</p>
//                         <p>Items: {order.items.length}</p>
//                         <p><span>&#x25cf;</span><b> {order.status}</b></p>
//                         <button onClick={fetchOrders} >Track Order</button>
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
// )
// }

// export default Myorders




// import React, { useContext, useEffect, useState } from 'react'
// import "./Myorders.css";
// import { StoreContext } from '../../Context/StoreContext';
// import axios from 'axios';
// import { assets } from '../../assets/assets';
// const Myorders = () => {

//     const { url, token } = useContext(StoreContext)
//     const [data, setData] = useState([]);

//     const fetchOrders = async () => {
//         const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
//         setData(response.data.data)
//         console.log(response.data.data)
//     }
//     useEffect(() => {
//         if (token) {
//             fetchOrders()
//         }
//     }, [token])
//     return (
//         <div className='my-orders'>
//             <h2>My orders</h2>
//             <div className="container">
//                 {data.map((order, index) => {
//                     return (
//                         <div key={index} className="my-order-orders">
//                             <img src={assets.parcel_icon} alt="" />
//                             <p>{order.items.map((item, index) => {
//                                 if (index === order.items.length - 1) {
//                                     return item.name + " x " + item.quantity
//                                 }
//                                 else {
//                                     return item.name + " x " + item.quantity + ", "
//                                 }
//                             })}</p>
//                             <p>${order.amount}.00</p>
//                             <p>Items: {order.items.length}</p>
//                             <p><span>&#x25cf;</span><b> {order.status}</b></p>
//                             <button onClick={fetchOrders} >Track Order</button>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Myorders