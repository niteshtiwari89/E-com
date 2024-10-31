// import React, { useEffect, useState } from "react";
// import "./Add.css";
// import { assets } from "../../assets/assets";
// import axios from "axios";
// import { toast } from "react-toastify";
// export const Add = ({url}) => {
  

//   const[image,setImage]=useState([]);
//   const[data,setData]=useState({
//     name:"",
//     description:"",
//     price:"",
//     category:"ghee",
//   })

//   const onChangeHandler =(event)=>{
//     const name =event.target.name;
//     const value = event.target.value;
//     setData(data=>({...data,[name]:value}))
//   }
//   const onSubmitHandler =async(event)=>{
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("name",data.name)
//     formData.append("description", data.description);
//     formData.append("price", data.price);
//     formData.append("category", data.category);
//     formData.append("image", image);

    
//     const response = await axios.post(`${url}/api/food/add`, formData);
//     if(response.data.success){
//       setData({
//         name: "",
//         description: "",
//         price: "",
//         category: "ghee",
//       });
//       setImage(false)
//       toast.success(response.data.message)
//     }
//     else{
//       toast.error(response.data.message)
//     }
//   }

//   useEffect(()=>{
//     console.log(data);
//   },[data])
//   return (
//     <div className="add">
//       <form className="flex-col" onSubmit={onSubmitHandler}>
//         <div className="add-img-upload flex-col">
//           <p>Upload Image</p>
//           <label htmlFor="image">
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type="file"
//             id="image"
//             hidden
//             multiple
//             required
//           />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type="text"
//             name="name"
//             placeholder="type here"
//           />
//         </div>
//         <div className="add-product-description flex-col">
//           <p>product description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name="description"
//             rows="6"
//             placeholder="write content here"
//           ></textarea>
//         </div>
//         <div className="add-category-price">
//           <div className="add-category flex-col">
//             <p>Product Category</p>
//             <select
//               onChange={onChangeHandler}
//               value={data.category}
//               name="category"
//             >
//               <option value="Ghee">Ghee</option>
//               <option value="Sweets">Sweets</option>
//               <option value="Desserts">Desserts</option>
//               <option value="Sandwich">Sandwich</option>
//               <option value="Exclusive">Exclusive</option>
//               {/* <option value="Pure Veg">Pure Veg</option>
//               <option value="pasta">pasta</option>
//               <option value="Noodles">Noodles</option> */}
//             </select>
//           </div>
//           <div className="add-price flex-col">
//             <p>Product Price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type="number"
//               name="price"
//               placeholder="₹150"
//             />
//           </div>
//         </div>
//         <button type="submit" className="add-btn">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };




import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

export const Add = ({ url }) => {
  const [images, setImages] = useState([]); // Change to an array for multiple images
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "ghee",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onFileChangeHandler = (event) => {
    setImages(Array.from(event.target.files)); // Convert FileList to array
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);

    // Append all images to the form data
    images.forEach((image) => {
      formData.append("images", image); // Use a singular name or an array
    });

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "ghee",
        });
        setImages([]); // Reset the images
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error uploading data.");
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
        <div className="image-preview">
          <p>Upload Images</p>
          {images.map((image, index) => (
            <img
              key={index}
              // height={"200px"}
              // width={"200px"}
              src={URL.createObjectURL(image)}
              alt={`preview-${index}`}
              className="preview-img"
            />
          ))}
        </div>
          <label htmlFor="images">
            <img
              src={assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={onFileChangeHandler}
            type="file"
            id="images"
            hidden
            multiple // Allow multiple files
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="write content here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Ghee">Ghee</option>
              <option value="Sweets">Sweets</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Exclusive">Exclusive</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="₹150"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};
