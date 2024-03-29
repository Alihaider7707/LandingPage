import React, { useState }  from 'react';
import "./header.css";
import Banner from "./Banner";
import {HiBars3} from 'react-icons/hi2'
import {ImCross} from "react-icons/im"


function Header() {
   const [Mobile, setMobile] = useState(false )
  return (
    <>
      <div className="header-backgroung">
        <div className="header-flex">
          <div className="logo">
            <h1>Eatly</h1>
          </div>
          <div className="navbar">
            <nav>
              <ul className= {Mobile? "nav-links-mobile" : "Links" } onClick={() =>setMobile(false)}>
                <li>
                  <a href="programs">Programs</a>
                </li>
                <li>
                  <a href="services">Services</a>
                </li>
                <li>
                  <a href="news">News</a>
                </li>
                <li>
                  <a href="about us">About Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn">
            <button>Let's Talk</button>
          </div>
          <button className='Mobile-Menu-icon headerbtn' onClick={() => setMobile(!Mobile)}>
      {Mobile? <ImCross className='headerbtn-icon'/> : <HiBars3 className='headerbtn-icon'/> }
      
    </button>
        </div>
        <Banner/>
      </div>
    </>
  );
}

export default Header;
