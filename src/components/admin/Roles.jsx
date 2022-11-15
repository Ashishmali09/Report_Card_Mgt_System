import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch, BiPlusCircle } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StripeCard from "../common/StripeCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllRoles, deleteRole } from "../../action/roleAction";
import { NavLink } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const schema = yup.object().shape({
  roleinput: yup.string().required("Please Enter Role"),
});

const Roles = () => {
  const dispatch = useDispatch();
  const [searchRoles, setSearchRoles] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleAddRole = (data) => {
    console.log(data);
  };

  const roles = useSelector((state) => state.roleReducer.roles);
  // console.log(roles);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteRole(id));
  };

  useEffect(() => {
    dispatch(getAllRoles());
  }, []);

  // const RolesArr = ["Subject Teacher", "Class Teacher"];

  return (
    <div>
      <div className="w-full h-14 bg-white flex justify-end items-center">
        <div className="border-2 w-1/3 h-8 px-5 flex items-center rounded-full">
          <BiSearch size={20} className="mr-2 text-gray-500" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search here"
            className="w-[90%] h-full outline-none"
            onChange={(e) => {
              console.log(e.target.value.trim());
              setSearchRoles(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="border-t-2 p-10 h-full">
        <form
          onSubmit={handleSubmit(handleAddRole)}
          className="flex items-center justify-between "
        >
          <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14">
            <label htmlFor="standardinput" className="flex mx-1 items-center">
              Roles
              <input
                type="text"
                name="roleinput"
                id="standardinput"
                className="mx-2 py-1 px-3 ml-5"
                {...register("roleinput")}
              />
              <span className="text-red-500">{errors.roleinput?.message}</span>
            </label>
          </div>
          <NavLink to="/admin/roles/add_role">
            <button
              type="submit"
              className="h-14 px-3 text-xs w-32 rounded-lg bg-primary text-white flex flex-col items-center justify-center"
            >
              <BiPlusCircle size={20} />

              <span>Add Role</span>
            </button>
          </NavLink>
        </form>
        {roles.map(
          (s, i) => {
            return (
              <div className="flex items-center justify-between my-2 " key={i}>
                <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14 flex justify-between">
                  <label htmlFor="roleinput" className="flex mx-1 items-center">
                    Roles
                    <span className="text-gray-700 ml-5">{s.name}</span>
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
          } // <StripeCard role={s} />\
        )}

        {/* <StripeCard />
        <StripeCard />
        <StripeCard />
        <StripeCard /> */}
      </div>
    </div>
  );
};

export default Roles;
