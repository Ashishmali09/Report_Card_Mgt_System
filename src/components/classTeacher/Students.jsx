import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiSearch, BiPlusCircle } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import StripeCard from "../common/StripeCard";
import {
  deleteStudent,
  getAllStudents,
} from "../../action/classTeacherAction/studentAction";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
  studentinput: yup.string().required("Please enter Student Name"),
});

const Students = () => {
  const [searchStudents, setSearchStudents] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const students = useSelector((state) => state.studentReducer.students);
  // console.log(students);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudents());
  }, []);
  const handleAddStudent = (data) => {
    console.log(data);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

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
              setSearchStudents(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="border-t-2 p-10 h-full paper-window overflow-y-hidden">
        <div className="flex">
          
          {" "}
          {/* px-3 text-xs rounded-lg  flex flex-col items-center
          justify-center */}
          <div className="flex justify-center h-[10%] w-[10%] bg-primary text-white py-10  rounded-lg flex-col items-center">
            <NavLink to={"/classTeacher/students/addstudent"} className="">
              <button
                type="submit"
                className="h-8 px-4 text-xs w-22 rounded-lg bg-primary paper-window text-white flex flex-col items-center justify-center"
              >
                <BiPlusCircle size={20} className="" />
                <span className="block">Add Student</span>
              </button>
            </NavLink>
          </div>
        </div>
        {students.map((s, i) => {
          return (
            <div className="flex items-center justify-between my-2 " key={i}>
              <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14 flex justify-between">
                <label
                  htmlFor="studentinput"
                  className="flex mx-1 items-center"
                >
                  Student
                  <span className="text-gray-700 ml-5">{s.firstName}</span>
                </label>
                <label
                  htmlFor="studentinput"
                  className="flex mx-1 items-center"
                >
                  Middle Name:
                  <span className="text-gray-700 ml-5">{s.middleName}</span>
                </label>
                <label
                  htmlFor="studentinput"
                  className="flex mx-1 items-center"
                >
                  Last Name:
                  <span className="text-gray-700 ml-5">{s.lastName}</span>
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
                  onClick={() => handleDelete(s._id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Students;
