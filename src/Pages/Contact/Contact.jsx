import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact ">
      <div className="contact__wrapper container">
        <div className="contact__info">
          <h3>Contact Info</h3>
          <div className="info__span">
            <p>
              <i className="bi bi-envelope"></i>
            </p>
            <span>
              <h5>Mail me</h5>
              <a target="_blank" href="mailto:noilaqiz10122009@gmail.com">
                noilaqiz0910@gmail.com
              </a>{" "}
              <br />
              <a target="_blank" href="https://t.me/Sotvoldiyeva_Noila">
                t.me/Sotvoldiyeva_Noila
              </a>
            </span>
          </div>
          <div className="info__span">
            <p>
              <i className="bi bi-telephone"></i>
            </p>
            <span>
              <h5>Contact me </h5>
              <a target="_blank" href="https://t.me/developer_SN">
                channel: developer_SN
              </a>{" "}
              <br />
              <a target="_blank" href="tel:+998907732709">
                90-773-27-09
              </a>
            </span>
          </div>
          <div className="info__span">
            <p>
              <i className="bi bi-geo-alt"></i>
            </p>
            <span>
              <h5>Location</h5>
              <p>Andijon</p>
              <p>Buloqboshi</p>
            </span>
          </div>
          <div className="info__span__last">
            <p className="last__icon">
              <i className="bi bi-globe-americas"></i>
            </p>
            <h5>Social info</h5>
            <span>
              <p>
                <a target="_blank" href="https://github.com/noiladev">
                  <i className="bi bi-github"></i>
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  href="https://www.instagram.com/dasturchi__qiz/"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </p>
              <p>
                <a target="_blank" href="https://t.me/Sotvoldiyeva_Noila">
                  <i className="bi bi-send-fill"></i>
                </a>
              </p>
            </span>
          </div>
        </div>
        <div className="mail">
          <h3>Let's Work Togather</h3>
          <form>
            <input className="name" placeholder="name*" />
            <input className="email" placeholder="Email*" type="text" />
            <input
              className="subject"
              placeholder="Your Subject* "
              type="text"
            />
            <input
              className="message"
              placeholder="Write a message*"
              type="text"
            />
            <button className="mail__btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
