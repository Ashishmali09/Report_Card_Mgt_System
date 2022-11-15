import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import RMSlogo from "../assets/RMSlogo.png";

const classTeacherMenuList = [
  {
    title: "Students",
    to: "students",
  },
  {
    title: "Reports",
    to: "reports",
  },
];

const ClassTeacherDashboard = () => {
  return (
    <div className=" h-screen w-full mx-auto flex justify-center">
      <div className="flex flex-col bg-[#F3F3F3]" style={{ flex: "1" }}>
        <div className="w-full h-12 bg-primary"></div>
        <div className="w-full h-14 bg-white border-r-2">
          <img src={RMSlogo} alt="RMSlogo" className=" h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col bg-white" style={{ flex: "5" }}>
        <Navbar menuList={classTeacherMenuList} />
        <Outlet />
      </div>
    </div>
  );
};

export default ClassTeacherDashboard;
