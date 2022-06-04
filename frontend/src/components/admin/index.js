
//import { Book } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Navbar from "./navbar";
//import Footer from "./footer";
//import Header from "./header";

const Admin = () => {

  const options = [
    {
      name : 'Signin',
      link : '/admin/signin'
    },
    {
      name : 'Add Platform',
      link : '/admin/addPlatform'
    },
    {
      name : 'Add Category',
      link : '/admin/addCategory'
    },
  
    {
      name : 'Manage platform',
      link : '/admin/managePlatform'
    },
    {
      name : 'Manage User',
      link : '/admin/manageUser'
    },
    
  ]



  return (
    <>
    <Navbar></Navbar>
      <Sidebar sidebarOptions={options} title={'Admin Dashboard'} >
    </Sidebar>
    <Outlet />
      
    </>
  );
};

export default Admin;