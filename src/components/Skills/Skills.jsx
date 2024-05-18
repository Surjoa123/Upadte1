// import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
// import HeartEmoji from "../../img/heartemoji.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
import card1 from "../../img/card1.jpg";
import card2 from "../../img/card2.jpg";
import card3 from "../../img/card3.jpg";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Skills = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span className="s1-skil" ><b style={{fontSize:"2rem"}}>My Skill</b></span>
        <span></span>
        <spane className="s2-skil" style={{fontSize:"1rem"}}>
          I am Learning Web Development , Machine Learning Using Python.
          <br />
          And
          I learn C ,JAVA ,PYTHON and JS and i also know Advance Coding ,
          <br />
          DSA & Algorithims and also OPPS Concept.
          <br />
          This is not end of the learning I always learn something new .
        </spane>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem", top: "-3rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          
        >
          <Card
            // emoji={HeartEmoji}
            className = "card1"
            card={card1}
            heading={"Web Developer"}
            detail={"Html, Css, Tailwind Css, Js, Reactjs, Nodejs , Express , MongoDB"}
          />
        </motion.div>
        {/* second card */}

        <motion.div
          initial={{ top: "26rem", left: "16rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            // emoji={Humble}
            card={card3}
            heading={"Coder"}
            detail={
              " I know C , Java , Python  , DSA , Alogorithms and OPPS concepts"
              
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        
        {/* 3rd */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            card={card2}
            heading={"Andorid Developer"}
            detail={"Still Learning"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;