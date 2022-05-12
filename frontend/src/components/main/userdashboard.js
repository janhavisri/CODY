import "../../stylesheets/userdashboard.css"
import "../../stylesheets/signup.css";
import "../../stylesheets/addreview.css";
import * as React from 'react';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Formik } from "formik";
import Swal from "sweetalert2";
import app_config from "../../config";
import { useState } from "react";
   function   UserDashboard({ setOpenAddReview }) {
       const url = app_config.api_url;
       const [hero, setHero] = useState("");
       const [ReviewFile, setReviewFile] = useState("");
  

  const reviewform = {
    websitename: "",
    url: "",
    heroimage:"",
    description: "",
    

  };
  const formSubmit = (values) => {
   console.log(values);
   values.heroimage = hero;
   values.file = ReviewFile;

   const reqOp = {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(values),
   };

   fetch(url + "review/add", reqOp)
     .then((res) => res.json())
     .then((data) => {
       console.log(data);

       if (data.message == "success") {
         Swal.fire({
           icon: "success",
           title: "Added Successfully!!",
         });
       }
     });
 };

 const uploadheroimage = (event) => {
   const formdata = new FormData();
   formdata.append("file", event.target.files[0]);

   const reqOptions = {
     method: "POST",
     body: formdata,
   };

   fetch(url + "util/addfile", reqOptions)
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       setHero(event.target.files[0].name);
     });
 };

 const uploadfile = (event) => {
   const formdata = new FormData();
   formdata.append("file", event.target.files[0]);

   const reqOptions = {
     method: "POST",
     body: formdata,
   };

   fetch(url + "util/createfile", reqOptions)
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       setReviewFile(event.target.files[0].name);
     });
 };

  return(
    <body class="bg-light body">
      <div class="row">
        <div class="col-md-10 col-11 mx-auto">
          <nav aria-label="breadcrumb"class="mb-3">
            <ol class="breadcrumb">
              <li class="breadcrumb-item "><a href="./login">Login</a></li>
              <li class="breadcrumb-item "><a href="./userdashboard">UserDashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">AddReview</li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-lg-3 col-md-4 d-md-block">
              <div class="card bg-common card-left">
                <div class="card-body">
                  <nav class="nav flex-column">
                    {/* <a class="nav-link active" aria-current="page" href="#">Active</a> */}
                    <a class="nav-link active"aria-current="page" href="#">AddReview</a>
                  </nav>
                </div>

              </div>
              <div class="card-body tab-content bordder-0">
                <div class="tab-pane active" id="addreview">
         <div>

         <div class="login">
         <div class="login-box">
	{/* <h1>Login</h1> */}
   <Formik initialValues={reviewform} onSubmit={formSubmit}>
                 {({ values, handleChange, handleSubmit }) => (
                   <form onSubmit={handleSubmit}>
           {/* <Avatar sx={{ m: 5,mx:40, bgcolor: 'secondary.main' }}> */}
             {/* <LockOutlinedIcon /> */}
           {/* </Avatar> */}
           <h1 className="add"> Add Review</h1>
           <TextField
                  className="w-100 mt-4 bg-white"
                  label="Website Name"
                  variant="filled"
                  id="websitename"
                  onChange={handleChange}
                  value={values.websitename}
                required></TextField>
                                <TextField
                  className="w-100 mt-4 bg-white"
                  label="Url"
                  variant="filled"
                  id="url"
                  onChange={handleChange}
                  value={values.url}
               ></TextField>
               
                <input
              
                  onChange={uploadheroimage}
                  type="file"
                  className="form-control mt-4 mx-0"
                  title="Select heroimage"
                required/>

                <TextField
                 multiline
                 rows={5}
                  className="w-100 mt-4 bg-white"
                  label="Description"
                  variant="filled"
                  id="description"
                  onChange={handleChange}
                  value={values.description}
                ></TextField>
                
             <Button
             
             fullWidth
               type="submit"
               variant="contained"
               sx={{  mt: 4, mb: 2 }}
             >
               Add
             </Button>
             <Grid container justifyContent="flex-end">
               <Grid item mx={27}>
                 
               </Grid>
             </Grid>
             </form>
                 )}
                 </Formik>

        
       </div>
       </div>
       </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
export default UserDashboard;