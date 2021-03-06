import React, { Component } from "react";
import "../style/CSS/Home.css";
import "../style/CSS/HomeImages.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="slider">
          <div className="slides">
            <div className="slide">
              <img
                src="assets/Pictures/pic3.jpg"
                className="slider-img"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/Pictures/pic7.jpg"
                className="slider-img"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/Pictures/pic2.jpg"
                className="slider-img"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/Pictures/pic4.jpg"
                className="slider-img"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/Pictures/pic8.jpg"
                className="slider-img"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="assets/Pictures/pic9.jpg"
                className="slider-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <header className="main-head">
          <nav>
            <img
              src="assets/Pictures/Logo.png"
              alt=""
              style={{ width: 50, height: 50, borderRadius: 8 }}
            />

            <h1 id="logo">Trip In Morocco</h1>
            <ul className="head">
              <li>
                <Link to="/">Acceuil</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              {/*</ul><li onclick={(window.location.href = "about.html")}>*/}
              <li>
                <Link to="/about">A propos de nous</Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <h2>Bienvenue ?? Trip in Morocco</h2>
          <h3></h3>
          {/*<button onclick={window.location.href = "try.html"}>*/}
          <button>Rejoignez-Nous</button>
        </section>
        <footer className="foot">
          <div className="footer-content">
            <h1 className="Navigation">Navigation</h1>

            <ul className="informations">
              <li>
                <a href="#">
                  <i className="Home">Acceuil</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="Membership">Membres</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="About Trip in Morocco">
                    ?? propos de Trip in Morocco
                  </i>
                </a>
              </li>
            </ul>

            <h1 className="contact">Contactez Nous</h1>
            <ul className="socials">
              <li>
                <a href="#">
                  <i className="Contact">Contact</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="Help and FAQ">Aide et FAQ</i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="Feedback">Feedback</i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>
              copyrightcopy; 2021 tripInMorocco. design par <span>ALACA</span>
            </p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Home;
