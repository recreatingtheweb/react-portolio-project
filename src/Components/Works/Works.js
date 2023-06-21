import React from "react";
import "./Works.css";
import w1 from "../../assets/w1.jpg";
import jordan from "../../assets/jordan.jpeg";
import w3 from "../../assets/w3.jpg";

import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Works = () => {
  return (
 
<div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
  
>
 
<h1>Recent Projects</h1>
<div class="album py-5 bg-light">
    <div class="container">

    
      <div class="row">

      
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


        
        
        

      </div>
    </div>
  </div>




</div>

  
)}

export default Works;
