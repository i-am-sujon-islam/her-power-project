import React from "react";
import Container from "./Container";

const ProjectPerson = () => {
  return (
    <div>
      <Container>
        <h1 className="py-1 bg-purple-300 text-center text">
          প্রকল্প সংশ্লিষ্ট গুরুত্বপূর্ণ ব্যক্তিবর্গ
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
          <div className="flex flex-col justify-center items-center gap-2 py-4 px-3 hover:scale-105 duration-300 border-[1px] border-gray-400">
            <h1>সচিব</h1>
            <img className="w-36 h-36" src="secretary.png" alt="secretary" />
            <h3>জনাব মোঃ সামসুল আরেফিন</h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 py-4 px-3 hover:scale-105 duration-300 border-[1px] border-gray-400">
            <h1>মহাপরিচালক</h1>
            <img className="w-36 h-36" src="dg-sir.jpg" alt="dg-sir" />
            <h3>জনাব মোঃ মোস্তফা কামাল</h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 py-4 px-3 hover:scale-105 duration-300 border-[1px] border-gray-400">
            <h1>প্রকল্প পরিচালক</h1>
            <img className="w-36 h-36" src="pd2.jpg" alt="pd2" />
            <h3>মনোয়ারা ইশরাত</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectPerson;
