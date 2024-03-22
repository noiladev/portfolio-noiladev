import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Projects.scss";
import adib from "../../assets/img/adib.jpeg";
import ecoCabins from "../../assets/img/ecocabins.jpeg";
import movie from "../../assets/img/movies.jpeg";
import food from "../../assets/img/food.jpeg";
import it from "../../assets/img/learningCenter.png";
import argon from "../../assets/img/argon.png";

function Projects() {
  return (
    <div className="projects">
      <h3>All projects</h3>
      <ul className="project__list container">
        <li className="project__item">
          <Link target="_blank" to="https://ecocabins-five.vercel.app/">
            <div className="box-img">
              <img src={ecoCabins} alt="" />
            </div>
            <p className="item__des">Try It Now</p>
          </Link>
          <h5 className="item__name">ECO Cabins</h5>
        </li>
        <li className="project__item">
          <Link target="_blank" to="https://kitob-noiladev2.vercel.app/">
            <div className="box-img">
              <img src={adib} alt="" />
            </div>
            <p className="item__des">Try It Now</p>
          </Link>
          <h5 className="item__name">O'zbek adiblari</h5>
        </li>
        <li className="project__item">
          <Link target="_blank" to="https://food-pos-dark1.vercel.app/">
            <div className="box-img">
              <img src={food} alt="" />
            </div>
            <p className="item__des">Try It Now</p>
          </Link>
          <h5 className="item__name">Foods</h5>
        </li>
        <li className="project__item">
          <Link target="_blank" to="https://movies-one-seven.vercel.app/">
            <div className="box-img">
              <img src={movie} alt="" />
            </div>
            <p className="item__des">Try It Now</p>
          </Link>
          <h5 className="item__name">Movies</h5>
        </li>
        <li className="project__item">
          <Link
            target="_blank"
            to="https://it-learning-center-seven.vercel.app/login"
          >
            <div className="box-img">
              <img src={it} alt="" />
            </div>
            <p className="item__des">Try It Now</p>
          </Link>
          <h5 className="item__name">IT learning center</h5>
        </li>
        <li className="project__item">
          <Link target="_blank" to="https://argon-roan.vercel.app/">
            <div className="box-img">
              <img src={argon} alt="" />
            </div>
            <p className="item__des">Try It Now</p>
          </Link>
          <h5 className="item__name">Argon</h5>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
