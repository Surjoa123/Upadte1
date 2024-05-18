import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img id="f-img" src={Wave} alt=""  />
      <div className="f-content">
        {/* <span>Surjo@gmail.com</span> */}
        <i class="bi bi-linkedin"></i>
        <div className="f-icons">
          <a
            href="https://www.github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/suman-shil-719122246/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <i class="bi bi-linkedin" color="white" size={"3rem"}></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
