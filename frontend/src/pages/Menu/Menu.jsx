import { menu_list } from "../../assets/assets";
import "../../components/ExploreMenu/ExploreMenu.css";
import { FoodDisplay } from "../../components/FoodDisplay/FoodDisplay";
import { useState } from "react";

const ExploreMenu = () => {
    const [category, setCategory] = useState("All");
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Products</h1>
        <p className="explore-menu-text">
          choose from the diverse menu featuring a delectable array of Products.
          our mishion is to provide a high quality Products
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                key={index}
                className="explore-menu-list-item"
              >
                <img
                  className={category === item.menu_name ? "Active" : ""}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
      <FoodDisplay category={category} />
    </>
  );
};

export default ExploreMenu;
