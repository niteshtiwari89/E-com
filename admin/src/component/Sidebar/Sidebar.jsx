import React from 'react'
import "./Sidebar.css"
import { assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
return (
  // <div>
    <div className="sidebar">
      <div className="sidebar-options">
        <Link to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add item</p>
        </Link>
        <Link to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List item</p>
        </Link>
        <Link to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Orders item</p>
        </Link>
      </div>
    </div>
  // </div>
);
}
