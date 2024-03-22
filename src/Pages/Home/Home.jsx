import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import "./Home.scss";
import rezume from "../../assets/img/rezume.jpg";
function Home() {
  var navigateContact = useNavigate();

  const navContact = () => {
    navigateContact("/contact");
  };

  return (
    <div className="home">
      <div className="home__wrapper container">
        <ul className="home__list">
          <div className="item__wrapper  card__main">
            <li className="hlist__item__main">
              <Link to="/  ">
                <img className="logo__img" src={logo} alt="" />
              </Link>
              <span className="info__main">
                <h3 className="name__main">Noila Sotvoldiyeva </h3>
                {/* <p className='des__main'>Hi,  I'm  a  intern  web  developer  based  in  Andijan</p>  */}

                <p data-aos="fade-up" class="homecangeanimation">
                  {" "}
                  And I'm <span></span>
                </p>

                <button onClick={navContact}>connact me</button>
              </span>
            </li>
          </div>
        </ul>

        <span className=" skills  ">
          <div className="skills__wrapper ">
            <span className="info skill__span">
              <h3 className="name">Skills</h3>
              <p className="des">I can write code in these ... </p>
            </span>
            <Link to="/project">
              <span className="my__lang">
                <img
                  className="lang__img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                  alt=""
                />
                <img
                  className="lang__img"
                  src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png"
                  alt=""
                />
                <img
                  className="lang__img"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                  alt=""
                />
                <img
                  className="lang__img"
                  src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png"
                  alt=""
                />
                <img
                  className="lang__img"
                  src="https://1000logos.net/wp-content/uploads/2023/10/React-Logo.png"
                  alt=""
                />
                <img
                  className="lang__img"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=webp&w=256"
                  alt=""
                />
                <img
                  className="lang__img"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg"
                  alt=""
                />
              </span>
            </Link>
          </div>
        </span>

        <div className="home__bottom">
          <ul className="exprinse">
            <Link to="/contact">
              <li className="exp__card">
                <p>1</p>
                <p>Years experience</p>
              </li>
            </Link>
            <Link to="/project">
              <li className="exp__card">
                <p>7+</p>
                <p>more than projects</p>
              </li>
            </Link>
            <Link to="/about" className="nav__about__card">
              <li className="exp__card  ">
                <p>About</p>
                <p>More info about me</p>
              </li>
            </Link>
          </ul>
          <div className="contact__card">
            {/* <img className='star__icon' src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png" alt="" /> */}
            <Link to="/contact" className="contact__link">
              <p>
                Let's work{" "}
                <span>
                  {" "}
                  <br /> together.
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
