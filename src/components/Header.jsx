import React, { useRef, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import Container from "./Container";

const Header = () => {
  const menuItem = [
    { title: "হোম", link: "#home" },
    { title: "কোর্সসমূহ", link: "#course" },
    { title: "যোগাযোগ", link: "#contact" },
  ];

  const [menu, setMenu] = useState(false);
  const ref = useRef();

  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  return (
    <div
      className="shadow-md hover:shadow-lg shadow-gray-600 hover:shadow-gray-700 mb-4 duration-200
     bg-gradient-to-r from-purple-500 via-green-500 to-orange-400 sticky top-0 z-50"
    >
      <Container>
        <div className="py-4 flex justify-between items-center relative">
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
          <CgMenuRightAlt
            onClick={handleMenu}
            className="block md:hidden text-4xl cursor-pointer hover:text-white/60 duration-300"
          />
          {menu && (
            <div
              onClick={handleClick}
              ref={(node) => (ref.current = node)}
              className="w-44 bg-gradient-to-b py-10 flex flex-col justify-center items-center gap-6 text-lg absolute top-full -right-5 z-20"
            >
              {menuItem?.map((item) => (
                <a
                  className="hover:text-purple-700 hover:bg-white/80 w-full text-center py-2 duration-300 border-r-2 border-black/75 pr-2 lg:pr-4"
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
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
