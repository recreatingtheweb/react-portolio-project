import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/symbol.jpg";
import "./Header.css";
const Header = () => {
  return (
    
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hello I'm</h1>
        <h2 className="fullname">Tyrell Simmons</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,

              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        {/* <p>
        Full Stack Developer skilled in JavaScript, Python, HTML, CSS, Django, and Node.js. Strong collaborator with a solid foundation in back end development, adept at creating dynamic, responsive, and interactive user experiences while adhering to industry standards.
        </p> */}
        {/* payment links */}
        {/* <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-amex"></i>
        </div> */}
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
       
      </div>
    </div>
    
  );
};

export default Header;
