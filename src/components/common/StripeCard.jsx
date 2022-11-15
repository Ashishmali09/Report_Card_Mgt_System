import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const StripeCard = (props) => {
  // console.log(props.division);
  console.log(props.grade);
  let item = props.item;

  return (
    <div className="flex items-center justify-between ">
      <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14 flex justify-between">
        {props.item.name ? (
          <label htmlFor="standardinput" className="flex mx-1 items-center">
            Standard
            <span className="text-gray-700 ml-5">{props.item.name}</span>
          </label>
        ) : (
          ""
        )}
        {props.division ? (
          <label htmlFor="standardinput" className="flex mx-12 items-center">
            Division
            <span className="text-gray-700 ml-5">{props.division.name}</span>
          </label>
        ) : (
          ""
        )}

        {props.grade ? (
          <label htmlFor="gradeinput" className="flex mx-1 items-center">
            Grade
            <span className="text-gray-700 ml-5">{props.grade}</span>
          </label>
        ) : (
          ""
        )}
        {props.Min ? (
          <label htmlFor="gradeinput" className="flex mx-12 items-center">
            Min Marks
            <span className="text-gray-700 ml-5">{props.Min}</span>
          </label>
        ) : (
          ""
        )}

        {props.role ? (
          <label htmlFor="gradeinput" className="flex mx-12 items-center">
            Roles
            <span className="text-gray-700 ml-5">{props.role}</span>
          </label>
        ) : (
          ""
        )}
      </div>
      <div className="h-14 px-3 my-2 text-xs w-[18%] rounded-lg bg-gray-100 text-white flex items-center justify-evenly">
        <NavLink to={`/admin/standards/${item._id}`}>
          <FiEdit
            size={15}
            className="text-primary h-10 w-10 p-[10px] cursor-pointer rounded-full bg-gray-50"
          />
        </NavLink>
        <FiTrash2
          size={15}
          className="text-primary h-10 w-10 p-[10px] cursor-pointer rounded-full bg-gray-50"
          onClick={() => props.deleteFun(item._id)}
        />
      </div>
    </div>
  );
};

export default StripeCard;
