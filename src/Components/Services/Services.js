import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div id="123" className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            My Tech <span>Stack</span>
          </h1>
          <p>
          Full Stack Developer skilled in JavaScript, Python, HTML, CSS, and SQL. Strong collaboration skills with a solid foundation in back end development, adept at creating dynamic, responsive, and interactive user experiences.
          </p>
          
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Front End Development</h3>
              <p>
                Skills: JavaScript, HTML, CSS, Bootstrap, Tailwind, React.js, Responsive Design
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>Backend Development</h3>
              <p>
                Skills: MySQL, SQL Server, Postgress SQL, Python, Django, Node.js, Express.js
              </p>
            </div>
          </div>
          {/* <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>U/X Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                laboriosam, rerum cupiditate sint praesentium nam architecto
                ullam in, minima reiciendis provident amet doloremque facilis
                obcaecati neque nemo totam. Tempore, illo.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
