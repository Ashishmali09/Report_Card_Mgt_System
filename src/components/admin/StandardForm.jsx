import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addStandard, updateStandard } from "../../action/standardAction";
import Standards from "./Standards";

const schema = yup.object().shape({
  name: yup.string().min(1).max(4).required(),
});

export function standardLoader({ params }) {
  const standardId = params.standardId;
  return standardId;
}
function AddStandard() {
  const standardId = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const standard = useSelector((state) => state.standardReducer.standards);
  // console.log("std=", Standards);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (!standardId) return;
    const standardData = standard.find((s) => s._id === standardId);
    setValue("name", standardData.name);
    setValue("_id", standardData._id);
  }, []);

  const onSubmitHandler = (data) => {
    //   console.log("welcome");
    if (data._id) {
      dispatch(updateStandard(data._id));
      navigate("/admin/standards");
    } else {
      dispatch(addStandard(data));
      navigate("/admin/standards");
    }
    console.log(data);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="flex justify-center place-content-center">
          <div className="col d-flex">
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="shadow mt-5 p-5"
            >
              <div className="mb-3 shadow-md">
                <div>
                  <label htmlFor="name" className="form-label">
                    {/* Add Standard */}
                  </label>
                </div>
                <div>
                  <input
                    {...register("name")}
                    type="text"
                    className="form-control rounded-full h-10 w-60"
                    placeholder="  eg. I, II, III, IV"
                    id="standard"
                  />
                </div>
                {/* <p className="text-danger">{errors.name?.message}</p> */}
              </div>
              <button
                type="submit"
                // className="rounded-lg border-4 h-10 w-[100%] bg-blue-500 border-indigo-600 justify-items-center"
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-s border-4 text-white py-1 px-2 rounded w-64"
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
export default AddStandard;
