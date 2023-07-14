import React from "react";
import computer from "../assets/computer.png";
import code from "../assets/code.png";
import gallery from "../assets/gallery.png";
import choice from "../assets/choice.png";
import ServicesSection from "./ServicesSection";
import OurClient from "./OurClient";

function HomeServices() {
  return (
    <div>
        <div className="container-fluid">
      <div className="container">
        <div className="section-one">
          <div className="section-one-wrapper">
            <div className="row align-center">
              <div className="col-xl-4 col-12">
                <div className="section-one-right-part">
                  <h1>Why Choose Amaito Soft?</h1>
                  <p>
                    Amaito Soft started off with a group of experts. Within a
                    few days the IT world has established itself through
                    improved work quality and customer satisfaction. The
                    specialty of Amaito Soft is that they do not submit jobs
                    until they are satisfied with a task. We are interested in
                    talking about your project. Stay tuned.
                  </p>
                </div>
              </div>
              <div className="col-xl-8 col-12">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="why-chosse-single-item"
                      style={{ backgroundColor: "#8B01FF", color:'#fff' }}
                    >
                      <div className="d-flex">
                        <div className="home-service-icon" >
                          <img src={computer} alt="" />
                        </div>
                        <h4>Mobile Responsive</h4>
                      </div>
                      <p>
                        As our website looks attractive from a computer, it can
                        be easily used with mobiles, tablets and tabs.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="why-chosse-single-item"
                      style={{ backgroundColor: "#e0eeee", marginTop:'4rem' }}
                    >
                      <div className="d-flex">
                        <div className="home-service-icon" style={{color:"#ddd"}}>
                          <img src={code} alt="" />
                        </div>
                        <h4>Clean Code</h4>
                      </div>
                      <p>
                        Non-commented and unobtrusive code makes future editing
                        of applications difficult. View source can see how well
                        our code is organized.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="why-chosse-single-item"
                      style={{ backgroundColor: "#e0eeee", marginTop:'-4rem' }}
                    >
                      <div className="d-flex">
                        <div className="home-service-icon" style={{color:"#ddd"}}>
                          <img src={gallery} alt="" />
                        </div>
                        <h4>User Friendly</h4>
                      </div>
                      <p>
                      If the user can not use our developed applications then what is the benefit of making these nonsense? So we have to try how to make them user friendly.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="why-chosse-single-item"
                      style={{ backgroundColor: "#8B01FF", color:'#fff' }}
                    >
                      <div className="d-flex">
                        <div className="home-service-icon" >
                          <img src={choice} alt="" />
                        </div>
                        <h4>Right Guidelines</h4>
                      </div>
                      <p>
                      We listen to the needs of our clients and give them the right guidance as well as make video tutorials on how to use it after application development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="services-section">
            <ServicesSection/>
            <OurClient/>
        </div>
    </div>
  );
}

export default HomeServices;
