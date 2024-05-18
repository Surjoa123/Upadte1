// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <div className="n-wrapper fixed-top shadow" id="Navbar" >
      {/* left */}
      <div className="n-left ">
        <div className="n-name logo " style={{fontFamily: "Lucida Console, Courier New, monospace"}}>Portfolio</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list" style={{display:"flex",justifyContent:"center"}}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li className="li1">
              <Link to="works" spy={true} smooth={true}>
                Learning Technology
              </Link>
            </li>
            
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;