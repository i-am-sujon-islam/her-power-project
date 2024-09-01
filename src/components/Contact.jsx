import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import Container from "./Container";

const Contact = () => {
  return (
    <div>
      <Container>
        <h1 className="text-3xl text-center text-orange-600 bg-purple-300 py-2">
          যোগাযোগ
        </h1>

        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8 px-10 border-r border-spacing-3 border-purple-600">
            <FaPhoneVolume
              onClick={() => alert("+880 1723-014488")}
              className="text-orange-600  text-5xl mx-6 cursor-pointer"
            />
            <MdOutlineMail className="text-orange-600  text-5xl mx-6 cursor-pointer" />
            <a href="https://www.facebook.com/herpowerproject" target="blank">
              <ImFacebook className="text-blue-600  text-5xl mx-6" />
            </a>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1295272249668!2d90.37051831137222!3d23.778401478562188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1465ed89915%3A0x4e7ec920e7b783ea!2z4Kac4Ka-4Kak4KeA4KefIOCmrOCmv-CmnOCnjeCmnuCmvuCmqCDgppMg4Kaq4KeN4Kaw4Kav4KeB4KaV4KeN4Kak4Ka_IOCmleCmruCmquCnjeCmsuCnh-CmleCnjeCmuCAtIE5hdGlvbmFsIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgQ29tcGxleA!5e0!3m2!1sen!2sbd!4v1725215813916!5m2!1sen!2sbd"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
