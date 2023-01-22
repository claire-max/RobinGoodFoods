import React from 'react'
// import "../Footer/footerstyle.css"
import "../../App.css";
import {BsGithub, BsTwitter, BsFacebook, BsLinkedin,BsPinterest} from 'react-icons/bs';
const Footer = () => {
  return (
    <section className="footer">
<br></br>
<section className="footer-social-media text-center text-white" style={{
        fontColor: 'white',
      }}>
<div className='Socialss'> 
             <a href="https://github.com/claire-max/RobinGoodFoods"><BsGithub size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a> 
             <a href="#"><BsTwitter size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
            <a href="#"><BsFacebook size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
             <a href="#"><BsLinkedin size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
             <a href="#"><BsPinterest size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>

      </div>
</section>
<section className="footer-info">
<section className="footer-info-left">
<section className="footer-info_products">
Products
<ul className='listitems1'>
                <li>
                  <a href='#!' className='text-white'>
                    Pancakes
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Baked Goods
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Coffee & Tea
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Merch
                  </a>
                </li>
              </ul>
</section>
</section>


 <section className="footer-info-useful">
Useful Links
<section className="footer-info_name">
<ul className='listitems2'>
                <li>
                  <a href='#!' className='text-white'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Orders
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Meet the Team
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Help
                  </a>
                </li>
              </ul>

</section>

</section> 

<section className="footer-info-right">
Contact
<section className="footer-info_contactlist">
<ul className='listitems3'>
                <li>
                  <a href='#!' className='text-secondary'>
                    California,CA 90210
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    robingoodfoods.com
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    01 234 765 9876
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    01 234 345 4556
                  </a>
                </li>
              </ul>
              <br/>
</section>
</section>
</section>
</section> 

  );
};

export default Footer;


