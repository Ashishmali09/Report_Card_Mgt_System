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

export function gradeLoader({ params }) {
  const gradeId = params.gradeId;
  return gradeId;
}

function AddGrade() {
  const gradeId = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const grade = useSelector((state) => state.gradeReducer.grades);
  //  console.log("grade=", grades);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (!gradeId) return;
    const gradeData = grade.find((r) => r._id === gradeId);
    setValue("name", gradeData.name);
    setValue("_id", gradeData._id);
  }, []);

  const onSubmitHandler = (data) => {
    console.log(data);
    dispatch(AddGrade(data));
    navigate("/admin/grades");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="shadow mt-5 p-5"
            >
              <div className="mb-3">
                <div>
                  <label htmlFor="name" className="form-label">
                    Add grade
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control  border-2 h-10 w-36"
                    placeholder="  eg. Subject teacher"
                    {...register("name")}
                    id="grade"
                  />
                </div>
                {/* <p className="text-danger">{errors.name?.message}</p> */}
              </div>
              <button
                type="submit"
                className="border-4 h-10 w-[100%] bg-blue-500 border-indigo-600 justify-items-center"
              >
                Add
              </button>
              {/* {navigate("/admin/standards")} */}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AddGrade;
