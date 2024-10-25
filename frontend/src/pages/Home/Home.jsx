import { useState } from "react";
import "./Home.css";
import { Header } from "../../components/Header/Header";
// import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu'
import { FoodDisplay } from "../../components/FoodDisplay/FoodDisplay";
// import { AppDownload } from '../../components/AppDownload/AppDownload'
import { useContext } from "react";
import { FoodItem } from "../../components/FoodItem/FoodItem";
// import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";

export const Home = () => {
  const [category, setCategory] = useState("All");

  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <Header />
      {/* <ExploreMenu category={category} setCategory={setCategory} /> */}
      {/* we are gonna use them as props means that passing the value to explormenu */}
      <div className="food-display" id="food-display">
        <h2>Top Products</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  images={item.image}
                  price={item.price}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
