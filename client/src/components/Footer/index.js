import "./footer.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaTwitterSquare} from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
         <div className="location">
        <FaHome size={20} style={
            {color:"#fff", marginRight:"2rem" }}/>
            <div>
                <p>Los Angeles</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={
            {color:"#fff", marginRight:"2rem" }}/> 916-945-3476</h4>
            </div>

           <div className="email">
            <h4><FaMailBulk size={20} style={
            {color:"#fff", marginRight:"2rem" }}/> RobinGoodFoods.com</h4>
           
            </div>
            </div>

        <div className="right">
            <h4>Let's Connect</h4>
            <div className="social">
             <a href="http://www.linkedin.com/in/claire-freeman-958b16156"><FaLinkedin size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
             <a href="https://github.com/claire-max/RobinGoodFoods"><FaInstagram size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
             <a href="https://github.com/claire-max/RobinGoodFoods"><FaTwitterSquare size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
             <a href="https://github.com/claire-max/RobinGoodFoods"><BsFacebook  size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
