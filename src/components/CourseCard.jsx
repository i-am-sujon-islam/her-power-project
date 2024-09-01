import React from "react";

const CourseCard = ({ title, img }) => {
  return (
    <div
      className="w-full  lg:w-96 bg-slate-100 shadow-md shadow-gray-400 border-[1px] border-gray-300 mx-auto  mt-8 py-6 hover:scale-105 duration-300 hover:border-[1px] hover:border-green-300
    flex flex-col justify-center items-center px-4"
    >
      <h1 className="text-center w-full text-lg text-white/90 bg-gradient-to-r from-green-500 to-purple-600 py-2">
        {title}
      </h1>
      <img className="w-28 mx-auto py-4" src={img} alt="img" />
      <div className="flex justify-center items-center gap-3 my-4">
        <p className="bg-white/90 px-3 text-gray-600 shadow-md shadow-green-300">
          ন্যূনতম এস.এস.সি. পাশ
        </p>
        <p className="bg-white/90 px-3 text-gray-600 shadow-md shadow-green-300">
          বয়স ১৮-৪০ বছর
        </p>
        <p className="bg-white/90 px-3 text-gray-600 shadow-md shadow-green-300">
          কোর্সের আওতাভুক্ত এলাকা
        </p>
      </div>
      <div className="w-full text-blue-700 flex justify-around">
        <button className="px-4 py-1 rounded-lg bg-purple-300">
          বিস্তারিত
        </button>
        <button className="px-4 py-1 rounded-lg bg-orange-200">নিবন্ধন</button>
      </div>
    </div>
  );
};

export default CourseCard;
