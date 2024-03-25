import React from "react";
import "./About.scss";
import rezume from "../../assets/rezume/rezume.pdf";

function About() {
  return (
    <div className="about">
      <div className="about__wrapper container">
        <div className="first__info">
          <h3>SELF-SUMMARY</h3>
          <span className="about__me">
            <h4>Sotvoldiyeva Noila </h4>
            <q>
              Hi, i was born in Andijan in 2009. I am a frontend developer with
              expertise in HTML, CSS, SCSS, Bootstrap, JavaScript and React.
              These technologies enable me to create visually appealing websites
              and interfaces. Along with developing robust and complex web
              applications, I also enjoy collaborating with designers and users
              to create the best user experience. By writing for me, I can help
              make your website unique and engaging.
            </q>
          </span>
        </div>
        <div className="second">
          <div className="plan">
            <p className="plansFor">PLANS FOR AFTER FRONTEND</p>
            <div>
              <span className="comment">2024-2025</span>
              <p>learning PYTHON, PHP, C++ </p>
              <span>2025-2026</span>
              <p>learning CYBERSECURITY </p>
              <h5>during these years</h5>
            </div>
          </div>
          <div className="edu">
            <p>EDUCATION</p>
            <div>
              <span>I learned Frontend in Andijan Digital City </span>
              <p>2023 08 2 - 2024 03 29</p>
              <span>
                I learned frontend from{" "}
                <a target="_blank" href="https://portfolio-com.netlify.app/">
                  Roziqov R
                </a>{" "}
                and other <a href="">youtube channels</a>
              </span>
            </div>
          </div>
        </div>
        <div className="rezume">
          <button>
            <p>
              <a target="_blank" href={rezume} download>
                {" "}
                my CV{" "}
              </a>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
