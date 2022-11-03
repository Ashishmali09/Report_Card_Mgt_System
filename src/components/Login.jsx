import React from "react";
import backgroundImageLogin from "../assets/backgroundImageLogin.png";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object().shape({
  username: yup.string().required("Please enter username").min(5).max(50),
  password: yup.string().required("Please enter username").min(8).max(1024),
});

export function getLoaderData({ params }) {
  return params.role;
}
const Login = () => {
  const role = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
   
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLoginSubmission = (data) => {
    if (role === "adminlogin") {
      delete data.teacherType;
      //login dispatch
      navigate("/admin");
    }
    if (role === "teacherlogin" && data.teacherType === "Subject Teacher") {
      //login dispatch

      navigate("/subjectteacher");
    }
    if (role === "teacherlogin" && data.teacherType === "Class Teacher") {
      //login dispatch
      navigate("/classteacher");
    }
  };
  return (
    <div
      className="h-[95%] w-[66%] bg-white bg-contain bg-no-repeat relative"
      style={{ backgroundImage: `url(${backgroundImageLogin})` }}
    >
      <div className="w-full h-20 flex justify-end items-center pr-10">
        <NavLink
          to="/"
          className="text-orange-600 mx-3 italic text-xs font-bold"
        >
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

      <div className="absolute w-[35%] h-1/3  bottom-40 right-8">
        <form
          onSubmit={handleSubmit(handleLoginSubmission)}
          className="flex flex-col mt-3 w-full h-full justify-evenly"
        >
          <label htmlFor="username" className="">
            Username
            <input
              type="text"
              name="username"
              id="username"
              {...register("username")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="eg@username123"
            />
            <p className="text-red-400">{errors.username?.message}</p>
          </label>
          <label htmlFor="password" className="">
            Password
            <input
              type="text"
              name="password"
              id="password"
              {...register("password")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="egdfghjk$fghjk#"
            />
            <p className="text-red-400">{errors.password?.message}</p>
          </label>
          {role === "teacherlogin" ? (
            <div className="my-2">
              <span className="block">Do you want to Login As</span>
              <div className="w-full flex justify-between items-center">
                <label htmlFor="Class Teacher" className="flex items-center">
                  <input
                    type="radio"
                    name="teacherType"
                    id="Class Teacher"
                    {...register("teacherType")}
                    className="accent-[#4F2B74] w-5 h-5 mr-2"
                    value="Class Teacher"
                  />{" "}
                  Class Teacher
                </label>
                <label htmlFor="Subject Teacher" className="flex items-center">
                  <input
                    type="radio"
                    name="teacherType"
                    id="Subject Teacher"
                    {...register("teacherType")}
                    className="accent-[#4F2B74] w-5 h-5 mr-2"
                    value="Subject Teacher"
                  />{" "}
                  Subject Teacher
                </label>
              </div>
            </div>
          ) : (
            ""
          )}
          <input
            type="submit"
            value="LOGIN"
            className="bg-[#315F8A] mt-4 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
