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
            <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:f3c597dd-2960-450f-93f2-c592e5cf1170">Resume</a>
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
