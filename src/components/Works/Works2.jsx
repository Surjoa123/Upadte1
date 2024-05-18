// import React, { useContext } from "react";
import "./Works.css";
import SpringBoot from "../../img/java2.png";
import JPA from "../../img/java3.png";
import Java from "../../img/java1.jpg";
import Coder from "../../img/Web1.4.jpg";
import AWS from "../../img/java4.jpg";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works2 = () => {
  //   // context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span className="span4">Java Development</span>
          <span className = "span2">I learn</span>
          <spane style = {{'font-size': '26px'}} className = "span3">
            Web Development Using Spring Boot , JPA , H2 Data base
            <br />
            And also Learn coding , DSA and Opps Concept.
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
            <img src={SpringBoot} alt="" style={{width: "9rem" ,borderRadius: "6rem"}}/>
          </div>
          <div className="w-secCircle">
            <img src={JPA} alt="" style={{width: "9rem" ,borderRadius: "6rem"}}/>
          </div>
          <div className="w-secCircle">
            <img src={Java} alt=""  style={{width: "9rem" ,borderRadius: "6rem"}}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Coder} alt="" style={{width:"8rem" , height:"8rem", borderRadius:"5rem"}}/>
          </div>
          <div className="w-secCircle">
            <img src={AWS} alt="" style={{width: "9rem" ,borderRadius: "6rem"}} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
      


      
    </div>
  );
};

export default Works2;
