import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import w1 from "./assets/w1.jpg"
import w3 from "./assets/w3.jpg"
import w5 from "./assets/w5.jpg"
import w8 from "./assets/w8.jpg"

import w2 from "./assets/w2.jpg"
import jordan from "./assets/jordan.jpeg"







function Portfolio() {
    return (
      <div>
        <div class="album py-5 bg-light">
    <div class="container">

    
      <div class="row">

      <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src={w3}></img>
            <div class="card-body">
              <p class="card-text">This site uses google firebase authentication and databases. User can login to their gmail account to be entered into a real time chat room.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a style={{marginRight: "10px"}}  href="https://gilded-cendol-caee02.netlify.app/" class="btn btn-primary">View Site</a>
                <a  href="javascript:void(0)" class="btn btn-primary">Private Code N/A</a>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img src={w5}></img>
            <div class="card-body">
              <p class="card-text">Create randomly generated passwords based on the user's requirements.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a style={{marginRight: "10px"}}  href="https://my-pass.netlify.app/" class="btn btn-primary">View Site</a>
                <a  href="https://github.com/recreatingtheweb/my_password_generator" class="btn btn-primary">View Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
       

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src={jordan}></img>
            <div class="card-body">
              <p class="card-text">Modeling portfolio developed for a model to display his photoshoots. This utilizes form submissions that are handled by netlify to deliver contact emails.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a style={{marginRight: "10px"}}  href="https://gregarious-liger-03b289.netlify.app/" class="btn btn-primary">View Site</a>
                <a  href="https://github.com/recreatingtheweb/jordan-portfolio" class="btn btn-primary">View Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src={w1}></img>
            <div class="card-body">
              <p class="card-text">This web application is used to calculate a customizable expense budget.This is built using React.js and utilizies hooks including useSate & useReducer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a style={{marginRight: "10px"}}  href="https://my-budgeting-app.netlify.app/" class="btn btn-primary">View Site</a>
                <a  href="https://github.com/recreatingtheweb/budget-tracker" class="btn btn-primary">View Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src={w8}></img>
            <div class="card-body">
              <p class="card-text">This website uses the geolocation API to  fetch the users longitude and lattitude then display the users location on an iframe map using the position stack API.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a style={{marginRight: "10px"}}  href="https://unrivaled-pavlova-b96bb9.netlify.app/" class="btn btn-primary">View Site</a>
                <a  href="https://github.com/recreatingtheweb/Geolocation " class="btn btn-primary">View Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <img src={w2}></img>
            <div class="card-body">
              <p class="card-text">This website uses the Bored API to  fetch ideas for users to have fun based on categories or the user can select at random.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a style={{marginRight: "10px"}}  href="https://strong-khapse-f7af9c.netlify.app/" class="btn btn-primary">View Site</a>
                <a  href="https://github.com/recreatingtheweb/bored-api" class="btn btn-primary">View Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
       
      </div>
    );
  }
  
  export default Portfolio;