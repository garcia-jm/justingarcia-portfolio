import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
const Menu = ({ setToggle }) => {
  const handleToggle = (setToggle) => {
    if (setToggle) {
      setToggle(false);
    } else {
      return;
    }
  };
  return (
    <>
      <p className="p__opensans">
        <a href="#home" onClick={() => handleToggle(setToggle)}>
          Justin Mari Garcia
        </a>
      </p>
      <p className="p__opensans">
        <a href="#about" onClick={() => handleToggle(setToggle)}>
          About Me
        </a>
      </p>
      <p className="p__opensans">
        <a href="#projects" onClick={() => handleToggle(setToggle)}>
          Projects
        </a>
      </p>
      <p className="p__opensans">
        <a href="#contact" onClick={() => setToggle(false)}>
          Contact Me
        </a>
      </p>
    </>
  );
};
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="portfolio__navbar section__padding">
      <div className="portfolio__navbar-links">
        <Menu setToggle="" />
      </div>
      <div className="portfolio__navbar-menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle((toggle) => !toggle)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggle((toggle) => !toggle)}
          />
        )}

        {toggle && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div>
              <Menu setToggle={setToggle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
