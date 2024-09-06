import React, { forwardRef } from "react";
import emailjs from "@emailjs/browser";

import Card from "../components/Card";
import "../Details_css/ContactDetail.css";

const ContactDetail = forwardRef((props, ref) => {
  return (
    <div className="Contact">
      <h1 className="contact-title">
        <a name="Contact">Contact</a>
      </h1>
      <div className="card-wrapper">
        <Card />
      </div>
    </div>
  );
});

export default ContactDetail;
