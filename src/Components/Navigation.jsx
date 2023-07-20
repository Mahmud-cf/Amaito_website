import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import shape4 from "../assets/shape4.png";
import shape5 from "../assets/shape5.png";
import web_d_img from "../assets/computer.svg";
import {  FaPhoneAlt } from 'react-icons/fa';
import {  MdLocationOn } from 'react-icons/md';
import rotate_img from '../assets/rotate.svg'

const Navigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
    
  return (
    <div className="header-wrapper container-fluid">
      <div className="header-bg-1">
        <div className="shape-1" ></div>
        <div className="shape-2">
          <img src={rotate_img} alt="" className="rotate-img" />
        </div>
      <div className="header-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-2 col-sm-3 col-xs-12">
            <div>
              <a href="/"><img src={logo} alt="Amaito Soft" className="logo" /></a>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 offset-xl-1">
          <div className="menu-button">
              <div className="res-menu-div"  onClick={handleClick}>
                <span>MENU</span>
                <div>
                <div className="nav-icon" ></div>
                <div className="nav-icon" ></div>
                <div className="nav-icon" ></div>
                </div>
              </div>
            </div>
            <div className="nav-info-bg" >
            <div className="nav-info-wrapper d-flex">
              <div className="single-nav-info d-flex" >
                <span><MdLocationOn/></span>
                <p>Arambag, Feni, Chittagong, Bangladesh</p>
              </div>
              <div className="single-nav-info d-flex" >
                <span><FaPhoneAlt/></span>
                <p>+880 1319-864529</p>
              </div>
            </div>
            </div>
            
            <div className={isClicked?'res-nev':"nav-wrapper"}>
              <div className="nav-link-wrapper d-flex">
                <div className="nav-link" ><a href="/" className="active">Home</a></div>
                <div  className="nav-link"><a href="/about">About Us</a></div>
                <div className="nav-link">
                  <a href="#"  className="dropdown-service" >
                    <span>Services</span>
                    <ul className="nav-drowdown-wrapper" >
                      <li>
                        <a href="/web-development">Web Development</a>
                      </li>
                      <li>
                        <a href="/app-development">App Development</a>
                      </li>
                      <li>
                        <a href="/ui-ux-design">UI/UX Design</a>
                      </li>
                      <li>
                        <a href="/digital-marketing">Digital Marketing</a>
                      </li>
                    </ul>
                  </a>
                  
                  </div>
                <div className="nav-link"><a href="/portfolio">Portfolio</a></div>
                <div className="nav-link"><a href="/contact">Contact</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main-part">
        <div className="container">
        <div className="header-under-wrapper text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="header-left-part-wrapper">
              <h1>SmartCode Solutions Amaito Soft</h1>
              <p>Empowering businesses with cutting-edge software solutions for enhanced productivity, efficiency, and growth in the digital era.</p>
              <p>Unleashing the power of technology to drive digital transformation and deliver exceptional user experiences through our custom software solutions.</p>
              <div className="button">
                <a href="/about">Know More </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-right-part">
              <img src={web_d_img} alt="" />
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>

      </div>
      </div>
    <div className="header-services-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 text-center" style={{backgroundColor:"#8B01FF"}}>
            <div className="single-header-services text-center">
              <h5><a href="/app-development" style={{color:'#fff'}} >App development</a></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 text-center" style={{backgroundColor:"#fc0ea9"}} >
            <div className="single-header-services text-center">
              <h5><a href="/web-development" style={{color:'#0E1323'}}>Web development</a></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 text-center" style={{backgroundColor:"#92278F"}} >
            <div className="single-header-services">
              <h5><a href="/ui-ux-design" style={{color:'#fff'}}>UI/UX DESIGN</a></h5>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 text-center" style={{backgroundColor:"#FFDD0A"}}>
            <div className="single-header-services">
              <h5><a href="/degital-marketing" style={{color:'#0E1323'}}>Digital Marketing</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navigation;