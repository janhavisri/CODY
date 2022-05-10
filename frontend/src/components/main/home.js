import "../../stylesheets/home.css";
//import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import web from "../../images/compare.png";
//import { NavLink } from "react-router-dom";
import React, { useState } from "react";
//import AddCourse from "../admin/addcourse";
//import Card from 'react-bootstrap/Card';

const Home = () => {
//   const [addcourseOpen, setOpenAddCourse] = useState(false);
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div class="container-fluid nav_bg ">
          <div class="row">
            <div class="col-10 mx-auto">
              <div class="row">
                <div class="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1 class="tag">
                  Find the best site builder with the best tips from our experts

                   
                  </h1>
                  <h2 class="my-3">
                  We take this seriously with web developers, and we perform in-depth tests on every product we test. We do unbiased, fun and concise reviews so that our audience learns, builds and enjoys the results.{" "}
                  </h2>
                  <button class=" bttn" ><a href="/main/signup"> Get Started </a></button>
                  <div class="mt-3">
                    {/* <NavLink
                      to="/main/signup"
                      className="openAddCourse btn-get-started"
                      onClick={() => {
                        setOpenAddCourse(true);
                      }}
                    >
                      Get Started
                    </NavLink>
                    {addcourseOpen && (
                      <AddCourse setAddCourseOpen={setOpenAddCourse} />
                    )} */}

                    {/* <NavLink to="/" class="btn-get-started">Get Started</NavLink> */}
                  </div>
                </div>
                <div class="col-lg-5 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    class="img-fluid animated"
                    alt="home img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </div>
      );
};
export default Home;