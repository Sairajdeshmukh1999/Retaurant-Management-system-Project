import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Online Food Ordering                
                 
        </h1>
        <h2>Shivam Resto</h2>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2024 &copy; Sairaj Deshmukh</p>
      </div>

      <div className="rightFooter">
       
      </div>
    </footer>
  );
};

export default Footer;
