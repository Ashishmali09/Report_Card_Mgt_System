import React from "react";
import { NavLink } from "react-router-dom";
import profileImage from "../assets/profileImage.jpg";

const Navbar = (props) => {
  const { menuList } = props;
  console.log(menuList);
  return (
    <div className="w-full h-12 bg-primary flex items-end justify-between">
      <div className="flex items-end h-full">
        {menuList.map((menuItem) => {
          return (
            <NavLink
              key={menuItem.to}
              to={menuItem.to}
              className="mr-2 text-white h-full flex items-center px-4 font-semibold"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#EEEAF1" : "",
                  color: isActive ? "#4F2B74" : "#EEEAF1",
                };
              }}
            >
              {menuItem.title}
            </NavLink>
          );
        })}
      </div>
      <div className="w-48 h-full flex items-center justify-evenly">
        <div className="flex flex-col items-end justify-center text-sm">
          <span className="text-[#EEEAF1]">Shivika Ojha</span>
          <span className="text-[#c7c3c9] italic">Class Teacher</span>
        </div>
        <div className="w-10 h-10 overflow-clip rounded-full border-2 border-[#cac6cd] ">
          <img
            src={profileImage}
            alt="profile image"
            className="h-10 w-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
