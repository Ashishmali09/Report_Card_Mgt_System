import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiSearch, BiPlusCircle } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StripeCard from "../common/StripeCard";
import { deleteGrade, getAllGrades } from "../../action/gradeAction";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
  gradeinput: yup.string().required("Please enter Grade"),
});

const Grades = () => {
  const [searchGrades, setSearchGrades] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const grades = useSelector((state) => state.gradeReducer.grades);
  console.log(grades);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGrades());
  }, []);
  const handleAddGrade = (data) => {
    console.log(data);
  };

  const handleDelete = (id) => {
    dispatch(deleteGrade(id));
  };

  // const gradeWithMinandMax = [
  //   { grade: "A1", Min: 90, Max: 100 },
  //   { grade: "B1", Min: 90, Max: 100 },
  //   { grade: "A2", Min: 90, Max: 100 },
  //   { grade: "B2", Min: 90, Max: 100 },
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
              console.log(e.target.value.trim());
              setSearchGrades(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="border-t-2 p-10 h-[510px] paper-window overflow-y-auto">
        <form
          onSubmit={handleSubmit(handleAddGrade)}
          className="flex items-center justify-between"
        >
          <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14">
            <label htmlfor="gradeinput" className="flex mx-2 items-center">
              Grade:
              <select
                name="gradeinput"
                id="grades"
                className="border-hidden w-24 p-1 mx-2"
              >
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
              </select>
              {/* <label htmlFor="gradeinput" className="flex mx-1 items-center">
              Standard
              <input
                type="text"
                name="gradeinput"
                id="gradeinput"
                className="mx-2 py-1 px-0 ml-5"
                {...register("gradeinput")}
              /> */}
              <div className="flex justify-end w-80 h-8 ">
                <span className="mx-2">Min Marks: </span>
                <input
                  type="text"
                  name="gradeinput"
                  id="gradeinput"
                  className=" w-28 "
                  {...register("gradeinput")}
                />
              </div>
              <span className="text-red-400">{errors.gradeinput?.message}</span>
            </label>
          </div>

          <NavLink
            to={"/admin/grades/addgrade"}
            className="h-14 px-3 text-xs w-[18%] rounded-lg bg-primary text-white flex flex-col items-center justify-center"
          >
            <button type="submit">
              <BiPlusCircle size={20} />
              <span>Add Grade</span>
            </button>
          </NavLink>
        </form>
        {grades.map(
          (g) => {
            return (
              <div className="flex items-center justify-between my-2 ">
                <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14 flex justify-between">
                  <label
                    htmlFor="standardinput"
                    className="flex mx-1 items-center"
                  >
                    Grade
                    <span className="text-gray-700 ml-5">{g.name}</span>
                  </label>
                  <label
                    htmlFor="standardinput"
                    className="flex mx-1 items-center"
                  >
                    Min Marks:
                    <span className="text-gray-700 ml-5">{g.start}</span>
                  </label>
                  <label
                    htmlFor="standardinput"
                    className="flex mx-1 items-center"
                  >
                    Max Marks:
                    <span className="text-gray-700 ml-5">{g.end}</span>
                  </label>
                </div>
                <div className="h-14 px-3 my-2 text-xs w-[18%] rounded-lg bg-gray-100 text-white flex items-center justify-evenly">
                  <FiEdit
                    size={15}
                    className="text-primary h-10 w-10 p-[10px] cursor-pointer rounded-full bg-gray-50"
                  />
                  <FiTrash2
                    size={15}
                    className="text-primary h-10 w-10 p-[10px] cursor-pointer rounded-full bg-gray-50"
                    onClick={() => handleDelete(g._id)}
                  />
                </div>
              </div>
            );
          }
          // g.div.map((gi)=>
          // <StripeCard grade={g.grade} />
        )}
      </div>
    </div>
  );
};

export default Grades;
