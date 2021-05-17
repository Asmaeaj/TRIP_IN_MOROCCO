import React, { Component } from "react";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="slider">
          <div class="slides">
            <div class="slide">
              <img src="Pictures/pic3.jpg" class="slider-img" alt="" />
            </div>
            <div class="slide">
              <img src="Pictures/pic7.jpg" class="slider-img" alt="" />
            </div>
            <div class="slide">
              <img src="Pictures/pic2.jpg" class="slider-img" alt="" />
            </div>
            <div class="slide">
              <img src="Pictures/pic4.jpg" class="slider-img" alt="" />
            </div>
            <div class="slide">
              <img src="Pictures/pic8.jpg" class="slider-img" alt="" />
            </div>
            <div class="slide">
              <img src="Pictures/pic9.jpg" class="slider-img" alt="" />
            </div>
          </div>
        </div>
        <header class="main-head">
      <nav>
        <img
          src="Pictures/Logo.png"
          style="width: 50px; height: 50px; border-radius: 8px"
        />

        <h1 id="logo">Trip In Morocco</h1>

        <ul class="head">
          <li><a href="#">Acceuil</a></li>
          <li><a href="#">Services</a></li>
          <li onclick="window.location.href" ="about.html">
            <a href="#">À propos de Nous</a>
          </li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <h2>Bienvenue à Trip in Morocco</h2>
      <h3></h3>
      <button onclick="window.location.href" ="try.html">Rejoignez-Nous</button>
    </section>
    <footer class="foot">
      <div class="footer-content">
        <h1 class="Navigation">Navigation</h1>

        <ul class="informations">
          <li>
            <a href="#"><i class="Home">Acceuil</i></a>
          </li>
          <li>
            <a href="#"><i class="Membership">Membres</i></a>
          </li>
          <li>
            <a href="#"
              ><i class="About Trip in Morocco"
                >À propos de Trip in Morocco</i
              ></a
            >
          </li>
        </ul>

        <h1 class="contact">Contactez Nous</h1>
        <ul class="socials">
          <li>
            <a href="#"><i class="Contact">Contact</i></a>
          </li>
          <li>
            <a href="#"><i class="Help and FAQ">Aide et FAQ</i></a>
          </li>
          <li>
            <a href="#"><i class="Feedback">Feedback</i></a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>
          copyright & copy; 2021 tripInMorocco. design par <span>ALACA</span>
        </p>
      </div>
    </footer>
      </React.Fragment>
    );
  }
}
export default Home;
