import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="w-full h-1 bg-purple-500 mt-2"></div>
        <img src="hpp-logo-text.png" alt="footer" className="w-96 mx-auto" />
      </Container>
    </div>
  );
};

export default Footer;
