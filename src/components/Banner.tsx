import React from "react";
import Container from "./Container";

const Banner = () => {
  return (
    <div id="home">
      <Container>
        <img
          className="max-h-96 lg:max-h-[450px] w-full"
          src="hpp-final-sakil-vai.png"
          alt="banner Image"
        />
      </Container>
    </div>
  );
};

export default Banner;
