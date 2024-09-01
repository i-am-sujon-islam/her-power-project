import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import Container from "./Container";

const Header = () => {
  const menuItem = [
    { title: "হোম", link: "#home" },
    { title: "কোর্সসমূহ", link: "#course" },
    { title: "যোগাযোগ", link: "#contact" },
  ];
  return (
    <div
      className="shadow-md hover:shadow-lg shadow-gray-600 hover:shadow-gray-700 mb-4 duration-200
    bg-gradient-to-r from-purple-500 via-green-500 to-orange-400"
    >
      <Container>
        <div className="py-4 flex justify-between items-center ">
          <div className="flex justify-center items-center gap-3">
            <a href="#home">
              <img className="w-24 h-20" src="logo-only.png" alt="logo" />
            </a>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg lg:text-2xl font-bold">
                হার পাওয়ার প্রকল্প
              </h1>
              <h3 className="text-sm lg:text-lg">
                প্রযুক্তির সহায়তায় নারীর ক্ষমতায়ন
              </h3>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center gap-6 text-lg ">
            {menuItem?.map((item) => (
              <a
                className="hover:text-purple-700 duration-300 border-r-2 border-black/75 pr-2 lg:pr-4"
                key={item.title}
                href={item?.link}
              >
                {item?.title}
              </a>
            ))}
            <a
              href="https://training.gov.bd/login"
              target="blank"
              className="border border-gray-600 px-6 py-2 rounded-md hover:bg-purple-600 hover:text-white/80 duration-300"
            >
              লগইন
            </a>
          </div>
          <CgMenuRightAlt className="block md:hidden text-4xl cursor-pointer hover:text-white/60 duration-300" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
