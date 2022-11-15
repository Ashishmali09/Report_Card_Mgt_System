import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch, BiPlusCircle } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StripeCard from "../common/StripeCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllStandards, deleteStandard } from "../../action/standardAction";
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
  standardinput: yup.string().required("Please Enter Standard"),
});

const Standards = () => {
  const dispatch = useDispatch();
  const [searchStandards, setSearchStandards] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleAddStandard = (data) => {
    console.log(data);
  };

  const standards = useSelector((state) => state.standardReducer.standards);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteStandard(id));
  };

  useEffect(() => {
    dispatch(getAllStandards());
  }, []);

  // const stdArr = ["I", "II", "III", "IV"]; //[{_id,name},{}]

  return (
    <div>
      <div className="w-full h-14 bg-white flex justify-end items-center">
        <div className="border-2 w-1/3 h-8 px-5 flex items-center rounded-full">
          <BiSearch size={20} className="mr-2 text-gray-500" />
          <input
            type="text"
            name="search"
            id="search"
            className="w-[90%] h-full outline-none "
            onChange={(e) => {
              // console.log(e.target.value.trim());
              setSearchStandards(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="border-t-2 p-10 h-full paper-window overflow-y-auto">
        <form
          onSubmit={handleSubmit(handleAddStandard)}
          className="flex items-center justify-between "
        >
          <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14">
            <label htmlFor="standardinput" className="flex mx-1 items-center">
              Standard
              <input
                type="text"
                name="standardinput"
                id="standardinput"
                className="mx-2 py-1 px-3 ml-5"
                {...register("standardinput")}
              />
              <span className="text-red-300">
                {errors.standardinput?.message}
              </span>
            </label>
          </div>
          <NavLink to="/admin/standards/add_standard">
            <button
              type="submit"
              className="h-14 px-4 text-xs w-44 rounded-lg bg-primary paper-window text-white flex flex-col items-center justify-center"
              // onClick={handleAddStandard}
            >
              <BiPlusCircle size={20} />

              <span>Add Standard</span>
            </button>
          </NavLink>
        </form>
        {standards.map((s) => (
          <StripeCard item={s} deleteFun={handleDelete} key={s._id} />
        ))}

        {/* 
       let standards = this.state.standards;
this.setState({
  standards: !standards // here
}) */}
      </div>
    </div>
  );
};

export default Standards;
