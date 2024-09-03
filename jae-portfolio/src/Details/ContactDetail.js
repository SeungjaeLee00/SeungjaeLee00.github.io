import React, { forwardRef } from "react";

const ContactDetail = forwardRef((props, ref) => {
  return (
    <div className="Contact">
      <h1 className="contact-title">
        <a name="Contact">Contact</a>
      </h1>
    </div>
  );
});

export default ContactDetail;
