//import '../stylesheets/login.css';
import app_config from "../../config";
import Swal from 'sweetalert2';
import { Formik } from 'formik';
 import logo from '../../images/created.png';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/icons';
// import Signup from '../components/signup';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const myStyles = makeStyles(() => ({
    mycard: {
        marginTop: '10rem',
        boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'
    }
   }))
const Login=()=>{
   // const [signupOpen,setOpenSignup] =useState(false);

 const url = app_config.api_url;
  const classes = myStyles();

 const navigate = useNavigate();
 

 const loginform = {
     email: '',
     password: ''
 }

 const formSubmit = (values) => {

     fetch(url + 'user/getbyemail/' + values.email)
         .then(res => res.json())
         .then(data => {
             if (data) {
                 console.log(data);

                 if (data.password == values.password) {
                     console.log('login success');

                     Swal.fire({
                         icon: 'success',
                         title: 'Login Success',
                     })

                     sessionStorage.setItem('user', JSON.stringify(data));
                     if(data.isAdmin){
                        navigate('/admin')
                    }else{
                         navigate('/user')

                     }

                     return
                 }
             }

             Swal.fire({
                 icon: 'error',
                 title: 'Email or Password Incorrect'
             })

         })


 }
 
   return(
     
     <div className="col-md-4 login " >
         <section class="tier1" id="login">
         <div className={clsx('card', classes.mycard)} style={{ marginTop: '7rem' }}>
             <div className="card-body">

                 <div className="col-md-4 mx-auto mt-4">
                     <img src={logo} className="img-fluid" />
                 </div>

                 

                 <Formik
                     initialValues={loginform}
                     onSubmit={formSubmit}
                 >{({
                     values,
                     handleChange,
                     handleSubmit
                 }) => (
                     <form onSubmit={handleSubmit}>
                         <label className="mt-5 w-100">Email*</label>
                         <input className="form-control" type="email" onChange={handleChange} value={values.email} name="email" required/>

                         <label className="mt-4">Password*</label>
                         <input className="form-control" onChange={handleChange} value={values.password} type="password" name="password" requied/>

                         <button type="submit" className="mt-5 btn btn-primary w-100 ">Login Now</button>
                     </form>
                 )}


                 </Formik>



                 <hr className="mt-4 hr" />
                 <a href="#">Forgot Password</a>
                 <div className="float-end">
                 {/* <a  href="" className="openSignup" onClick={()=>{
           setOpenSignup(true);
       }}>Not Registered Yet?</a>
       {signupOpen && <Signup setSignupOpen={setOpenSignup}/>}
       */}

                     <a href="#">Not Registered Yet?</a>
                 </div>

             </div>
         </div></section>
     </div>
)
}

export default Login;