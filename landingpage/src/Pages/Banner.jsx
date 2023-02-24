import React from "react";
import "./Banner.css";
import {BsCaretRightFill } from "react-icons/bs";
import img01 from '../images/image1.png'

function Banner() {
  return (
    <>
    <div className="banner-flex">
      <div className="banner01">
        <div className="banner-text">
          <h1>
            Changing<br></br> your <span style={{ color: "#ffa700" }}>eating</span><br></br>
            habits
          </h1>
          <p>
            Always take care of your health starting from the food menu that you
            consume every day
          </p>
        </div>
        <div className="explore-btn">
          <div className="header-btn">
            <button>Explore Menu</button>
          </div>
          <div className="video">
            <div className="icon">
            <BsCaretRightFill  style={{border:"3px solid rgb(167, 132, 202)",borderRadius:"50%",textAlign:"center",background:"#fff",padding:"13px",fontSize:"30px"}}/>
            </div>
            <div className="icon-text">
                <h3>Watch Video</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="banner02">
        <img src={img01} alt="" />
      </div>
      </div>
  
    </>
  );
}

export default Banner;
