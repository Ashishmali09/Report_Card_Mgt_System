
import Home from './components/Home';





import React, { Fragment, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const App = () =>
{

  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.loginReducer.token);
  // let decode = null
  // if (token)
  // {
  //   decode = jwt_decode(token)
  // }
  const token = "sdsds"
  useEffect(() =>
  {
    // dispatch(loadLogin())
  }, [])

  return (


    <>
      {token ? <Outlet /> :
        <div className="h-screen w-full bg-primary flex justify-center items-center">
          <Outlet />
        </div >

      }
    </>
  );
};

export default App;