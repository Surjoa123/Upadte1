// import React, { useContext } from "react";
import "./Works.css";
import MongoDb from "../../img/web4.png";
import React from "../../img/web1.png";
import Web from "../../img/web5.jpg";
import Nodejs from "../../img/web2.jpg";
import Express from "../../img/web3.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
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
          <span className = "span1">Web Development</span>
          <span className = "span2">I learn</span>
          <spane style = {{'font-size': '26px'}} className = "span3">
            Full stack development.In Forntend  I learn CSS , Bootsrap <br />, javascript , React and also Tailwind CSS
            <br />
            And In backend I learn Node js , Express js and MongoDB . 
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
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" , repeat:Infinity }}

          // initial={{ rotate: 0 }}
          //   animate={{ rotate: 360 }}
          //   transition={{
          //       duration: 10, // Duration for one complete rotation
          //       repeat: Infinity, // Repeat the animation indefinitely
          //       ease: "linear" // Ensures the speed is consistent
          //   }}

          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={MongoDb} alt=""  style={{width:"8rem" , height:"8rem", borderRadius:"5rem"}} />
          </div>
          <div className="w-secCircle">
            <img src={React} alt="" style={{width:"8rem" , height:"8rem", borderRadius:"7rem"}} />
          </div>
          <div className="w-secCircle">
            <img src={Web} alt="" style={{width:"10rem" , height:"10rem", borderRadius:"6rem" }}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Nodejs} alt="" style={{width:"8rem" , height:"8rem", borderRadius:"8rem"}} />
          </div>
          <div className="w-secCircle">
            <img src={Express} alt="" style={{width:"8rem" }}/>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
      


      
    </div>
  );
};

export default Works;
