import { BrowserRouter, Routes, Route, Navigate, useParams} from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import Login from "./components/main/login";
import Home from "./components/main/home";
import Signup from "./components/main/signup";
import Admin from "./components/admin";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import ManageUser from "./components/admin/manageuser";
import Chart from "./components/admin/chart";



function App() {
  
  

  return (
    
    <BrowserRouter>
 
      <Routes>
        <Route element={<Main />} path="main">
        <Route element={<Home />} path="home" />
        <Route element={<Login />} path="login" />
         <Route element={<Signup />} path="signup" />
        </Route>
        
        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Profile />} path="profile" />
          <Route element={<Chart />} path="chart" />
          <Route element={<ManageUser />} path="manageuser" />
          
 
        </Route>


        
        
        <Route element={<Navigate to="/main/signup" />} path="/" />
      </Routes>
    </BrowserRouter>
    
    
     
      

         
  );
}

export default App;