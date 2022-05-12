import { Outlet } from "react-router-dom";
//import Login from "./login.js";
//import Header from "/header.js";
import Header from "./header.js";
const Main = () => {
  return (
    <>
         <Header></Header> 
      <Outlet />

    </>
  );
};
export default Main;