import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:pratiksha3mane@gmail.com.com">
        <Button>Email: saideshmukh1999@gmail.com  </Button>
        <Button>Contact: 8484846017</Button>
      </a>
    </div>
  );
};

export default Contact;
