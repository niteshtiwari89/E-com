import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} className='footer-logo' alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            hic repellat sapiente, adipisci, quod voluptatem architecto harum
            voluptatum nisi vitae ducimus dolores? Pariatur, nemo? Excepturi
            accusantium ea modi eos in!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/product">Delivery</Link></li>
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="tel:+919876543210">+91 9876543210</a></li>
            <li><a href="mailto:contact@neutron-nutracutical.com">contact@neutron-nutracutical.com</a></li>
            {/* <li>contact@neutron-nutracutical.com</li> */}
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyrights'>Copyrights 2024  neutron-nutracutical.com - All Rights Reserved.</p>
    </div>
  );
}
