import React from "react";
import call from "../../public/logo-call-center.svg";
import marketin from "../../public/logo-digital-marketing.svg";
import ecommerce from "../../public/logo-ecommerce.svg";
import graphics from "../../public/logo-graphics-design.svg";
import servics from "../../public/logo-it-service.svg";
import web from "../../public/logo-web-dev.svg";
import Container from "./Container";
import CourseCard from "./CourseCard";

const Course = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center text-white/90 py-2 text-3xl bg-purple-400">
          এক নজরে আমাদের কোর্সসমূহ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard title="ওমেন কল সেন্টার এজেন্ট" img={call} />
          <CourseCard title="ওমেন ই-কমার্স প্রোফেসনাল" img={ecommerce} />
          <CourseCard title="ওমেন আইটি সার্ভিস প্রোভাইডার" img={servics} />
          <CourseCard title="গ্রাফিক্স ডিজাইন" img={graphics} />
          <CourseCard title="ওয়েব ডেভেলপমেন্ট" img={web} />
          <CourseCard title="ডিজিটাল মার্কেটিং" img={marketin} />
        </div>
      </Container>
    </div>
  );
};

export default Course;
