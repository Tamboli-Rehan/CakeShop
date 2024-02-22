import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="coffee-shop-footer">
          <Logo />
          <div className="site-links">
            <nav className="links-container">
              <Link to="about">About</Link>
              <Link to="menu">Menu</Link>
              <Link to="visit">Visit</Link>
            </nav>
          </div>
          <div className="other">
            <div className="contact-info">
              <p className="hours">
                <span className="icon far fa-clock fa-fw"></span> Hours: DAILY
                7AM - 8PM
              </p>
              <p className="address">
                <span className="icon fas fa-map-marker-alt fa-fw"></span> 01 xyz building shop no.10 Cafe Cake Shop
              </p>
              <p className="phone">
                <span className="icon fas fa-phone-alt fa-fw"></span>{" "}
                <a href="tel:9152132162">9152132162</a>
              </p>
            </div>
            <div className="social-media-links">
              <a
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
                title="Facebook"
              >
                <span className="fab fa-facebook fa-fw"></span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
                title="Instagram"
              >
                <span className="fab fa-instagram fa-fw"></span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
                title="Twitter"
              >
                <span className="fab fa-twitter fa-fw"></span>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="app-footer">
          Created by{" "}
          <a href="https://portfolio-tamboli-rehan.netlify.app/" target="_blank">
            Tamboli Rehan
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
