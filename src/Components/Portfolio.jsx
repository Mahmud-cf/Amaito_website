import React from "react";
import { portfolio } from "../JsonData/Client";
import { app_portfolio } from "../JsonData/Client";
import link from '../assets/link.png'

function Portfolio() {
  return (
    <div className="container-fluid portfolio-section-wrapper">
      <div className="container">
        <div className="services-section-wrapper">
          <h1>Portfolio</h1>
          <div className="hr-icon"></div>
          <p>Web Design and Development Portfolio</p>
        </div>
        <div className="portfolio-item-wrapper">
          <div className="row">
            {portfolio.map(item => {
              return(
                <div className="col-md-4 col-sm-6" key={item.id} >
                  <div className="portfolio-single-item-wrapper">
                    <div className="portfolio-img-wrapper" >
                      
                      
                      <img src={item.img} alt="" className="img-fluid" />
                      
                      <div className="portfolio-link" >
                      <a href={item.link} target="blank">
                        <img src={link} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="portfolio-item-name" >
                      <a href={item.link} target="blank">
                      {item.title}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services-section-wrapper">
          <h1>Portfolio</h1>
          <div className="hr-icon"></div>
          <p>App Development Portfolio</p>
        </div>
        <div className="portfolio-item-wrapper app-portfolio">
          <div className="row">
            {app_portfolio.map(item => {
              return(
                <div className="col-md-4 col-sm-6" key={item.id} >
                  <div className="portfolio-single-item-wrapper">
                    <div className="portfolio-img-wrapper" >
                      
                      
                      <img src={item.img} alt="" className="img-fluid app-portfolio-img" />
                      
                      <div className="portfolio-link" >
                      <a href='' target="blank">
                        <img src={link} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
