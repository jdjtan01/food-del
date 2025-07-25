import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="footer_logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus consequuntur porro distinctio similique, dolores recusandae exercitationem voluptate nemo nam accusantium illum praesentium assumenda. Id, nesciunt neque. Cupiditate, provident rerum</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="footer_social_icons" />
                <img src={assets.twitter_icon} alt="footer_social_icons" />
                <img src={assets.linkedin_icon} alt="footer_social_icons" />
            </div>

        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-234-567-8910</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright {(new Date()).getFullYear()} © Tomato.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
