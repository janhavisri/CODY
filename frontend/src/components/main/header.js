//import '../../stylesheets/header.css';
import {NavLink} from "react-router-dom";


const Header = () => {
 

  return(
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    <div className="container">
      
      <NavLink className="navbar-brand me-2" to="https://mdbgo.com/">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="16"
          alt="MDB Logo"
          loading="lazy"
          
        />
      </NavLink>
  
      
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
  
      
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="#">Dashboard</NavLink>
          </li>
        </ul>

  
        <div className="d-flex align-items-center">
        <NavLink to="./login">  <button type="button" className="btn btn-link px-3 me-2">
            Login
          </button></NavLink>
         <NavLink to="./signup"> <button type="button" className="btn btn-primary me-3">
            Sign up for free
          </button></NavLink>
          <NavLink
            className="btn btn-dark px-3"
            to="https://github.com/mdbootstrap/mdb-ui-kit"
            role="button"
            ><i className="fab fa-github"></i
          ></NavLink>
        </div>
      </div>
      
    </div>
    
  </nav>
  
  </div>
          );
        };
        
export default Header;