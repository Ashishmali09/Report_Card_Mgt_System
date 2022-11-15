import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch, BiPlusCircle } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StripeCard from "../common/StripeCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllDivisions } from "../../action/divisionAction";
import { NavLink } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const schema = yup.object().shape({
  divisioninput: yup.string().required("Please enter Division"),
});

const Division = () => {
  const dispatch = useDispatch();
  const [searchDivisions, setSearchDivisions] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleAddDivision = (data) => {
    console.log(data);
  };

  const divisions = useSelector((state) => state.divisionReducer.divisions);

  useEffect(() => {
    dispatch(getAllDivisions());
  }, []);
  console.log(divisions);
  // const divArr = ["A", "B", "C", "D"];
  // const stdwithDiv = [
  //   { std: "I", div: ["A", "B"] },
  //   { std: "II", div: ["B"] },
  //   { std: "III", div: ["A", "B", "C"] },
  //   { std: "IV", div: ["B"] },
  // ];

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
              // console.log(e.target.value.trim());
              setSearchDivisions(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="border-t-2 p-10 h-[510px] paper-window overflow-y-auto">
        <form
          onSubmit={handleSubmit(handleAddDivision)}
          className="flex items-center justify-between"
        >
          <div className="flex w-[80%] bg-gray-100 p-3 rounded-lg h-14">
            <label htmlfor="divisioninput" className="flex mx-2 items-center">
              Division:
            </label>
            <select
              name="divisioninput"
              id="divisioninput"
              className="border-hidden w-28 p-1.5 mx-2"
              {...register("divisioninput")}
            >
              <option value="I">A</option>
              <option value="II">B</option>
              <option value="III">C</option>
              <option value="IV">D</option>
            </select>
            {/* <label htmlFor="divisioninput" className="flex mx-1 items-center">
              Standard
              <input
                type="text"
                name="divisioninput"
                id="divisioninput"
                className="mx-2 py-1 px-0 ml-5"
                {...register("divisioninput")}
              /> */}
            <div className="flex justify-end w-80 h-8 ">
              <span className="mx-2">Division: </span>
              <input
                type="text"
                name="divisioninput"
                id="divisioninput"
                className=" w-28 "
                {...register("divisioninput")}
              />
            </div>
            <span className="text-red-400">
              {errors.divisioninput?.message}
            </span>
          </div>
          <button
            type="submit"
            className="h-14 px-3 text-xs w-[18%] rounded-lg bg-primary text-white flex flex-col items-center justify-center"
            onClick={handleAddDivision}
          >
            <NavLink to="/admin/division/add_division">
              <BiPlusCircle size={20} />
            </NavLink>
            <span>Add Division</span>
          </button>
        </form>
        <div></div>
        {divisions.map((d) => {
          // console.log(d);
          return (
            <div className="flex items-center justify-between my-2 ">
              <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14 flex justify-between">
                <label
                  htmlFor="standardinput"
                  className="flex mx-1 items-center"
                >
                  Division
                  <span className="text-gray-700 ml-5">{d.name}</span>
                </label>
              </div>
            </div>
          );
        })}
        {/* <StripeCard />
        <StripeCard />
        <StripeCard />
        <StripeCard /> */}
      </div>
    </div>
  );
};

export default Division;
