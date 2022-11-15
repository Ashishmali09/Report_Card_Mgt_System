import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
});

export function studentLoader({ params }) {
  const studentId = params.studentId;
  return studentId;
}

function AddStudent() {
  const studentId = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const student = useSelector((state) => state.studentReducer.students);
  //  console.log("grade=", grades);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (!studentId) return;
    const studentData = student.find((s) => s._id === studentId);
    setValue("firstName", studentData.firstName);
    setValue("_id", studentData._id);
  }, []);

  const onSubmitHandler = (data) => {
    console.log(data);
    dispatch(AddStudent(data));
    navigate("/classTeacher/students");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row flex justify-center mt-24">
          <div className="h-[40%] w-[80%] bg-gray-100 p-3 mr-5 ">
            <label
              htmlFor="studentDetails"
              className="flex-shrink-24 text-teal-500 hover:text-teal-800 text-lg border-b border-teal-500 py-1 px-2 rounded"
              type="button"
            >
              Student Details:{" "}
            </label>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="items-center justify-between border-transparent border-4 "
            >
              <div className="">
                <label
                  htmlFor="studentinput"
                  className="flex mx-1 items-center"
                >
                  First Name:
                  {/* <select
                name="studentinput"
                id="students"
                className="border-hidden w-24 p-1 mx-1"
              >
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
              </select> */}
                  <label
                    htmlFor="studentinput"
                    className="flex mx-1 items-center"
                  ></label>
                  <input
                    type="text"
                    name="studentinput"
                    id="studentinput"
                    className="flex justify-center w-36 items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                    // className="mx-1 py-1 px-1 ml-2 w-3/12"
                    {...register("studentinput")}
                  />
                  {/* <div className="flex justify-end w-80 h-8 "> */}
                  <span className="mx-1 px-2">Middle Name:</span>
                  <input
                    type="text"
                    name="studentinput"
                    id="studentinput"
                    className="flex justify-center items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                    {...register("studentinput")}
                  />
                  {/* </div> */}
                  {/* <div className="flex justify-end w-60 h-8 "> */}
                  <span className="mx-1">Last Name: </span>
                  <input
                    type="text"
                    name="studentinput"
                    id="studentinput"
                    className="flex justify-center items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                    {...register("studentinput")}
                  />
                  {/* </div> */}
                  <span className="text-red-500">
                    {errors.studentinput?.message}
                  </span>
                </label>
              </div>

              <div className="flex flex-wrap">
                <label
                  htmlFor="studentinput"
                  className="flex mx-1 items-center"
                >
                  Standard:
                  <select
                    name="studentinput"
                    id="students"
                    className="border-hidden w-24 p-1 mx-1"
                  >
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                  </select>
                </label>

                {/* <div className="flex justify-end w-80 h-8 "> */}
                <label
                  htmlFor="studentinput"
                  className="flex mx-1 items-center"
                >
                  Division:
                  <select
                    name="studentinput"
                    id="students"
                    className="border-hidden w-24 p-1 mx-1"
                  >
                    <option value="A1">A</option>
                    <option value="A2">B</option>
                    <option value="B1">C</option>
                    <option value="B2">D</option>
                  </select>
                </label>
                <span className="flex items-center mx-2 px-5">Year: </span>
                <input
                  type="number"
                  name="studentinput"
                  id="studentinput"
                  className="flex justify-center items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                  {...register("studentinput")}
                />
                {/* </div> */}
                <span className="text-red-500">
                  {errors.studentinput?.message}
                </span>
              </div>

              <div className="flex justify-self-auto">
                <label
                  htmlFor="studentinput"
                  className="flex items-center mx-1"
                >
                  DOB:
                </label>
                <input
                  type="date"
                  name="studentinput"
                  id="studentinput"
                  className="flex justify-center items-center rounded py-2 w-36 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                  {...register("studentinput")}
                />

                {/* </div> */}
                <span className="text-red-500">
                  {errors.studentinput?.message}
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="row flex justify-center">
          <div className="h-[40%] w-[80%] bg-gray-100 p-3 mr-5">
            <label
              htmlFor="studentDetails"
              className="flex-shrink-24 text-teal-500 hover:text-teal-800 text-lg border-b border-teal-500 py-1 px-2"
              type="button"
            >
              Parent Details:
            </label>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="items-center justify-between border-transparent border-4 "
            >
              <div className="">
                <label
                  htmlFor="studentinput"
                  className="flex mx-1 items-center"
                >
                  First Name:
                  <label
                    htmlFor="studentinput"
                    className="flex mx-1 items-center"
                  ></label>
                  <input
                    type="text"
                    name="studentinput"
                    id="studentinput"
                    className="flex justify-center w-36 items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                    // className="mx-1 py-1 px-1 ml-2 w-3/12"
                    {...register("studentinput")}
                  />
                  {/* <div className="flex justify-end w-80 h-8 "> */}
                  <span className="mx-1 px-2">Last Name:</span>
                  <input
                    type="text"
                    name="studentinput"
                    id="studentinput"
                    className="flex justify-center items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                    {...register("studentinput")}
                  />
                  {/* </div> */}
                  {/* <div className="flex justify-end w-60 h-8 "> */}
                  <span className="mx-1">Phone: </span>
                  <input
                    type="tel"
                    name="studentinput"
                    id="studentinput"
                    className="flex justify-center items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                    {...register("studentinput")}
                  />
                  {/* </div> */}
                  <span className="text-red-500">
                    {errors.studentinput?.message}
                  </span>
                </label>
              </div>

              <div className="flex flex-wrap">
                <span className="mx-1">Email: </span>
                <input
                  type="tel"
                  name="studentinput"
                  id="studentinput"
                  className="flex justify-center items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                  {...register("studentinput")}
                />
                {/* <div className="flex justify-end w-80 h-8 "> */}
                <span className="mx-1">City: </span>
                <input
                  type="text"
                  name="studentinput"
                  id="studentinput"
                  className="flex justify-center items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                  {...register("studentinput")}
                />
                <span className="flex items-center mx-2 px-5">District: </span>
                <input
                  type="text"
                  name="studentinput"
                  id="studentinput"
                  className="flex justify-center items-center rounded py-2 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                  {...register("studentinput")}
                />
                {/* </div> */}
                <span className="text-red-500">
                  {errors.studentinput?.message}
                </span>
              </div>

              <div className="flex justify-self-auto">
                <label
                  htmlFor="studentinput"
                  className="flex items-center mx-1"
                >
                  State:
                </label>
                <input
                  type="text"
                  name="studentinput"
                  id="studentinput"
                  className="flex justify-center items-center rounded py-2 w-36 px-4 mb-3 mt-3 leading-tight focus:outline-none focus:bg-white"
                  {...register("studentinput")}
                />

                {/* </div> */}
                <span className="text-red-500">
                  {errors.studentinput?.message}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AddStudent;
