import logo from "./logo.svg";
import "./App.css";
import { AnimatedSwitch } from 'react-router-transition';
import { BrowserRouter, Route, Routes, NavLink,Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Login from "./components/main/login";
import Home from "./components/main/home";
import Signup from "./components/main/signup";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import ManageUser from "./components/admin/manageuser";

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
          <Route element={<ManageUser />} path="manageuser" />
 
        </Route>
        
        <Route element={<User />} path="user">
        <Route element={<Main />} path="main"></Route>
        </Route>
        <Route element={<Navigate to="/main/signup" />} path="/" />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
