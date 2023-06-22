import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      
      <div className="nav-links">
        <ul>
          
          <li >
          <Link class="nav-link" to="/">Home</Link>
          </li>
          <li> 
          {/* <i class="fa-solid fa-laptop-code"></i> */}
          <a href="https://github.com/recreatingtheweb">Github</a>
          </li>
          <li>
          {/* <i class="fa-solid fa-file-lines"></i> */}
            <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:e493829a-68db-4e2e-b2bc-5005c190748d">Resume</a>
          </li>
          <li >
          {/* <i class="fa-solid fa-folder"></i> */}
          <Link class="nav-link" to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
