import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import { AccountCircle, Dashboard } from "@mui/icons-material";
import NavBar from "./navbar";


const Admin = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
  ];

  return (
    <div>
      <NavBar></NavBar>
      {/* <h1>Admin</h1> */}
      <Sidebar sidebarOptions={sidebarOptions} title="Admin Dashboard">
        
      </Sidebar>
        <Outlet />
    </div>
  );
};

export default Admin;
