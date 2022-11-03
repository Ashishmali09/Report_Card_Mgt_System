import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import baseBackgroundImage from "../assets/baseBackgroundImage.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[95%] w-[66%] bg-white bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${baseBackgroundImage})` }}
    >
      <div className="w-full h-20 flex justify-end items-center pr-10">
        <NavLink to="/" className="text-orange-600 mx-3 text-xs  font-bold">
          ABOUT US
        </NavLink>
        <select
          name="login"
          id="login"
          className="selectlogin outline-none border-none w-fit cursor-pointer"
          onChange={(e) => {
            if (e.target.value === "adminlogin")
              navigate(`/login/${e.target.value}`);
            if (e.target.value === "teacherlogin")
              navigate(`/login/${e.target.value}`);
          }}
        >
          <option value="" className="">
            Login
          </option>
          <option value="adminlogin">Admin Login</option>
          <option value="teacherlogin">Teacher Login</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
