import React from "react";
import Container from "./Container";

const MyImage = () => {
  return (
    <div>
      <Container className="relative">
        <div className=" fixed bottom-0 right-0 animate animate-bounce ease-in-out">
          <img
            className="w-20 h-20 rounded-full "
            src="MD-Sujon-Islam-removebg.png"
            alt="Sujon"
          />
        </div>
      </Container>
    </div>
  );
};

export default MyImage;
