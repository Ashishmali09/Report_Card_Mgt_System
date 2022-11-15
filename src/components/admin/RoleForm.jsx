import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRole } from "../../action/roleAction";

const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
});

export function roleLoader({ params }) {
  const roleId = params.roleId;
  return roleId;
}

function AddRole() {
  const roleId = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state.roleReducer.roles);
  //  console.log("role=", Roles);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (!roleId) return;
    const roleData = role.find((r) => r._id === roleId);
    setValue("name", roleData.name);
    setValue("_id", roleData._id);
  }, []);

  const onSubmitHandler = (data) => {
    console.log(data);
    dispatch(addRole(data));
    navigate("/admin/roles");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="flex justify-center">
          <div className="col d-flex">
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className=" shadow mt-5 p-5"
            >
              <div className="mb-3 shadow-md">
                <div>
                  <label htmlFor="name" className="form-label"></label>
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control rounded-lg h-10 w-60"
                    placeholder="  eg. Subject teacher"
                    {...register("name")}
                    id="role"
                  />
                </div>
                <div className="my-4">
                  <button
                    type="submit"
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-s border-4 text-white py-1 px-2 rounded w-64"
                  >
                    Add
                  </button>
                </div>
                {/* <p className="text-danger">{errors.name?.message}</p> */}
              </div>

              {/* {navigate("/admin/standards")} */}
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AddRole;
