import React, { Component } from "react";
import "../style/CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="slider">
          <div className="slides">
            <div className="slide">
              <img src="Pictures/pic3.jpg" className="slider-img" alt="" />
            </div>
            <div className="slide">
              <img src="Pictures/pic7.jpg" className="slider-img" alt="" />
            </div>
            <div className="slide">
              <img src="Pictures/pic2.jpg" className="slider-img" alt="" />
            </div>
            <div className="slide">
              <img src="Pictures/pic4.jpg" className="slider-img" alt="" />
            </div>
            <div className="slide">
              <img src="Pictures/pic8.jpg" className="slider-img" alt="" />
            </div>
            <div className="slide">
              <img src="Pictures/pic9.jpg" className="slider-img" alt="" />
            </div>
          </div>
        </div>
        <header className="main-head">
          <nav>
            <img
              src="Pictures/Logo.png"
              /*style="width: 50px; height: 50px; border-radius: 8px"*/
            />

            <h1 id="logo">Trip In Morocco</h1>

            <ul className="head">
              <li>
                <a href="#">Acceuil</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              {/*</ul><li onclick={(window.location.href = "about.html")}>*/}
              <li>
                <a href="#">À propos de Nous</a>
              </li>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <h2>Bienvenue à Trip in Morocco</h2>
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
                    À propos de Trip in Morocco
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
