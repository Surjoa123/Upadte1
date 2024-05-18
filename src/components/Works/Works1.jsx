// import React, { useContext } from "react";
import "./Works.css";
import django from "../../img/web1.3.png";
import machine from "../../img/web2.1.jpg";
import python from "../../img/web1.1.webp";
import jup from "../../img/web1.5.jpg";
import coder from "../../img/Web1.4.jpg";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works1 = () => {
  //   // context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      
      {/* left side */}
      <div className="w-left works1">
        <div className="awesome">
          {/* dark Mode */}
          <span className="span4">Python Development</span>
          <span className="span5" >I learn</span>
          <spane style = {{'font-size': '26px'}}>
            Machine Learnning , Django 
            <br />
            And also Learn coding , DSA and Opps Concept. 
            <br />
            
            <br />
            
          </spane>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right " >
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={django} alt="" style={{width:"8rem" , height:"8rem", borderRadius:"4rem"}} />
          </div>
          <div className="w-secCircle">
            <img src={machine} alt="" style={{width:"8rem" , height:"8rem", borderRadius:"4rem"}} />
          </div>
          <div className="w-secCircle">
            <img src={python} alt="" style={{width:"10rem" , height:"10rem", borderRadius:"6rem"}}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={jup} alt="" style={{width:"7rem" , height:"7rem", borderRadius:"5rem"}}/>
          </div>
          <div className="w-secCircle">
            <img src={coder} alt="" style={{width:"8rem" , height:"8rem", borderRadius:"5rem"}} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
      


      
    </div>
  );
};

export default Works1;
