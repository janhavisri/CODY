import "../../stylesheets/home.css";
//import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import web from "../../images/compare.png";
//import { NavLink } from "react-router-dom";
import React, { useState } from "react";
//import AddCourse from "../admin/addcourse";
//import Card from 'react-bootstrap/Card';

const Home = () => {
//   const [addcourseOpen, setOpenAddCourse] = useState(false);
  return (
    <div>
      <section id="header" className="d-flex align-items-center ">
        <div class="container-fluid nav_bg ">
          <div class="row">
            <div class="col-10 mx-auto">
              <div class="row">
                <div class="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h3 class="tag">
                  Find the best site builder with the best tips from our experts

                   
                  </h3>
                  <h5 class="my-3">
                  We take this seriously with web developers, and we perform in-depth tests on every product we test. We do unbiased, fun and concise reviews so that our audience learns, builds and enjoys the results.{" "}
                  </h5>
                  <a href="/main/signup">
                  <Button variant="contained">Get Started</Button></a>
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
              <h1 class="h11">Client Review</h1>
              <div class="div">

  <div class="container mt-5  mb-5 main">
    
  <div class="row g-2">
      <div class="col-md-4">
          <div class="card p-3 text-center px-4">
            
            
              <div class="user-image"> <img src="https://cdn5.vectorstock.com/i/1000x1000/50/29/avatar-icon-of-girl-in-a-wide-brim-felt-hat-vector-16225029.jpg" class="rounded-circle" width="80"/> </div>
              <div class="user-content">
                
                  <h5 class="mb-0 bruce">Bruce Hardy</h5> <span>Software Developer</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
              <div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
          </div>
      </div>
      <div class="col-md-4">
          <div class="card p-3 text-center px-4">
              <div class="user-image"> <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png" class="rounded-circle" width="80"/> </div>
              <div class="user-content">
                  <h5 class="mb-0 mark">Mark Smith</h5> <span>Web Developer</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
          </div>
      </div>
      <div class="col-md-4">
          <div class="card p-3 text-center px-4">
              <div class="user-image"> <img src="https://image.shutterstock.com/image-vector/face-happy-girl-avatar-laughing-260nw-1459862774.jpg" class="rounded-circle" width="80"/> </div>
              <div class="user-content">
                  <h5 class="mb-0 veera">Veera Duncan</h5> <span>Software Architect</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
          </div>
      </div>
      <div class="faq-header">Frequently Asked Questions</div>

<div class="faq-content">
  <div class="faq-question">
    <input id="q1" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label for="q1" class="panel-title">What Happen In This Website</label>
    <div class="panel-content">User Create Website without Code(Listing Website)</div>
  </div>
  
  <div class="faq-question">
    <input id="q2" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label for="q2" class="panel-title">What Happen After Signup</label>
    <div class="panel-content">Add Your Review</div>
  </div>
  
  
</div>

  </div></div>
  </div>
            </div>
          </div>
        </div>
      </section>
      
      
      </div>
      );
};
export default Home;