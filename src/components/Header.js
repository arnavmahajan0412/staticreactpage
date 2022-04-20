import React from "react";
import '../App.css';
import Typed from 'react-typed';
import { Button } from "react-bootstrap";
export const Header = () => {
  return (
    <div id="home" className="header-wraper">
        <div className="main-info">
            <h1>Web Developer </h1>
            <Typed 
              className="typed-text"
              strings={["Web Design", "Web Development", "Facebook Ads", "Google Ads"]}
              typeSpeed = {40}
              backSpeed = {60}
              loop
            />
            <Button className="btn" variant="light">Contact Me</Button>
        </div>
    </div>
  )
}
