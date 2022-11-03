import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Grades = () => {
  const [searchStandards, setSearchStandards] = useState();

  return (
    <div>
      <div className="w-full h-14 bg-white flex justify-end items-center">
        <div className="border-2 w-1/3 h-8 px-5 flex items-center rounded-full">
          <BiSearch size={20} className="mr-2 text-gray-500" />
          <input
            type="text"
            name="search"
            id="search"
            className="w-[90%] h-full outline-none"
            onChange={(e) => {
              console.log(e.target.value.trim());
              setSearchStandards(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="border-t-2">Grades</div>
    </div>
  );
};

export default Grades;
