import React from 'react'
import './About.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { AiFillGoogleCircle } from "react-icons/ai";


const About = () => {
  return (
    <div>
      <section className="text-center about">
        <h1>About US</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
              <span className="fa fa-group"><AiFillGoogleCircle /></span>
              <h2>Section 1</h2>
              <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
            <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
              <span className="fa fa-info"><AiFillGoogleCircle /></span>
              <h2>Section 2 </h2>
              <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
            </div>
            <div className="clearfix visible-md-block visible-sm-block"></div>
            <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
              <span className="fa fa-file"><AiFillGoogleCircle /></span>
              <h2>Section 3</h2>
              <p className="lead">              
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>

          </div>
          <div>      
              <AiFillGoogleCircle />
            <h1>hellomaheshh</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
