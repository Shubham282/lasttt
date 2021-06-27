/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ig.css";
import shub1 from "../../images/light1.jpg";
import shub2 from "../../images/light2.jpg";
import shub3 from "../../images/light3.jpg";
import shub4 from "../../images/light4.jpg";
import shub5 from "../../images/light5.jpg";
import shub6 from "../../images/light6.jpg";
import shub7 from "../../images/light7.jpg";



const Instagram = () => {
  return (
    <>
      <div className="flex" id="ig">
        <div className="grid">
          <div classname="shub">
            <a href='https://www.instagram.com/p/B3pb4hyluUw/'><img className="img-grid" src={shub1} alt="imgage 1" /></a>
          </div>
          <div classname="shub">
         <a href='https://www.instagram.com/p/B4NOQMAACyk/'><img
              className="img-grid"
              src={shub2}
              alt="imgage 1"
            /></a>
          </div>
          <div classname="shub">
         <a href='https://www.instagram.com/p/B4cr5TEAqLM/'><img
              className="img-grid"
              src={shub3}
              alt="imgage 1"
            /></a>
          </div>

          <div classname="shub">
            <a href="https://www.instagram.com/p/B4pf9PbAvok/"><img
              className="img-grid"
              src={shub4}
              alt="imgage 1"
            /></a>
          </div>
          <div classname="shub">
            <a href="https://www.instagram.com/p/B3htHM9lOGq/"><img
              className="img-grid"
              src={shub5}
              alt="imgage 1"
            /></a>
          </div>
          <div classname="shub">
            <a href="https://www.instagram.com/p/B56qe4XgQCS/"><img
              className="img-grid"
              src={shub6}
              alt="imgage 1"
            /></a>
          </div>
          <div classname="shub">
            <a href="https://www.instagram.com/p/B_OufuvgMuj/"><img
              className="img-grid"
              src={shub7}
              alt="imgage 1"
            /></a>
          </div>
          <div classname="shub">
            <img
              className="img-grid"
              src="https://source.unsplash.com/random"
              alt="imgage 1"
            />
          </div>
          <div classname="shub">
            <img
              className="img-grid"
              src="https://source.unsplash.com/random"
              alt="imgage 1"
            />
          </div>
          <div classname="shub">
            <img
              className="img-grid"
              src="https://source.unsplash.com/random"
              alt="imgage 1"
            />
          </div>
          <div classname="shub">
            <img
              className="img-grid"
              src="https://source.unsplash.com/random"
              alt="imgage 1"
            />
          </div>
          <div classname="shub">
            <img
              className="img-grid"
              src="https://source.unsplash.com/random"
              alt="imgage 1"
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Instagram;
