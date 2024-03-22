import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logosvg.svg";
import "./Header.scss";
import { IoMdMenu } from "react-icons/io";

function Header() {
  const [show, setShow] = useState("scrolling-possive");
  const [lastScrollY, setLastScrollY] = useState("");
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 50) {
        setShow("scrolling-active");
      } else {
        setShow("scrolling-possive");
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header className={`header ${show}`}>
      <nav className="header__nav container">
        <Link>
          <img className="nav__logo" src={logo} alt="" />
        </Link>
        <ul className="nav__list">
          <li className="list__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="list__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="list__item">
            <Link to="/project" className="nav__link">
              Projects
            </Link>
          </li>
          <li className="list__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
        <span className="menu-btn">
          <IoMdMenu />
        </span>
        <div className="empty"></div>
      </nav>
    </header>
  );
}

export default Header;
