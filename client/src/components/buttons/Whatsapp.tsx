import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function Whtasapp() {
  return (
    <ReactWhatsappButton
      countryCode="IL"
      phoneNumber="054222222"
      animated
      style={{
        right: "10px",
        bottom:'60px'
      }}
    />
  );
}

export default Whtasapp;
