import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="sai.jpg"
              alt="Founder"
            />
            <Typography>Sairaj Deshmukh</Typography>
            <Button onClick={visitInstagram} color="primary">
              
            </Button>
            <span>
              
            </span>

            <p>
              This website is made by @sairajdeshmukh.
            </p>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a>
             
            </a>
            <p>Welcome to Shivam Restaurants!

              Shivam Restaurants is excited to introduce our custom online ordering system. It makes it easy to manage customer interactions and orders for our wide variety of tasty dishes and drinks. This system is specifically designed to meet the needs of Shivam Restaurants and similar places, ensuring a smooth and enjoyable dining experience for our customers.</p>
                 
            <a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
