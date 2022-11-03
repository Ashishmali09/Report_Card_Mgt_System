import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiSearch, BiPlusCircle } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import StripeCard from "../common/StripeCard";

const schema = yup.object().shape({
  standardinput: yup.string().required("Please enter Standar Number"),
});

const Standards = () => {
  const [searchStandards, setSearchStandards] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleAddStandard = (data) => {
    console.log(data);
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
              setSearchStandards(e.target.value.trim());
            }}
          />
        </div>
      </div>
      <div className="border-t-2 p-10  h-full">
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
          <button
            type="submit"
            className="h-14 px-3 text-xs w-[18%] rounded-lg bg-primary text-white flex flex-col items-center justify-center"
          >
            <BiPlusCircle size={20} />
            <span>Add Standard</span>
          </button>
        </form>
        <StripeCard />
        <StripeCard />
        <StripeCard />
        <StripeCard />
        <StripeCard />
      </div>
    </div>
  );
};

export default Standards;
