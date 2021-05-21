import React, { Component } from "react";
import "../style/CSS/about.css";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="container"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('assets/Pictures/pic.jpg')",
          }}
        >
          <div className="navbar">
            <img
              src="assets/Pictures/Logo.png"
              className="logo"
              style={{ width: 80, height: 80, borderRadius: 8 }}
            />
            <nav>
              <ul>
                <li>
                  <Link to="/">Acceuil</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">A propos de nous</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="col">
              <h1>Trip In Morocco</h1>
              <p>Venez découvrir qui sommes-nous.</p>
            </div>
            <div className="col">
              <div
                className="card card1"
                style={{
                  backgroundImage: "url('assets/Pictures/pic6.jpg')",
                }}
              >
                <h5>Cuisine Marocaine</h5>
                <p>
                  Découvrez désormais l'art culinaire marocain de toutes les
                  régions du Maroc.
                </p>
              </div>
              <div
                className="card card2"
                style={{
                  backgroundImage: "url('assets/Pictures/pic7.jpg')",
                }}
              >
                <h5>Architecture Marocaine</h5>
                <p>
                  Découvrez désormais une architecture ancienne et moderne du
                  Maroc.
                </p>
              </div>
              <div
                className="card card3"
                style={{
                  backgroundImage: "url('assets/Pictures/pic2.jpg')",
                }}
              >
                <h5>Villes Marocaines</h5>
                <p>
                  Découvrez désormais le Nord, le Sud, l'Est ou encore l'Ouest
                  du Maroc.
                </p>
              </div>
              <div
                className="card card4"
                style={{
                  backgroundImage: "url('assets/Pictures/pic4.jpg')",
                }}
              >
                <h5>Sculpture Marocaine</h5>
                <p>
                  Découvrez désormais l'art de la sculpture de nos artisans
                  marocains.
                </p>
              </div>
              <div
                className="card card5"
                style={{
                  backgroundImage: "url('assets/Pictures/pic8.jpg')",
                }}
              >
                <h5>Nature Marocaine</h5>
                <p>
                  Découvrez désormais la beauté incomparable de la nature au
                  Maroc.
                </p>
              </div>
              <div
                className="card card6"
                style={{
                  backgroundImage: "url('assets/Pictures/pic9.jpg')",
                }}
              >
                <h5>Traditions Marocaines</h5>
                <p>
                  Découvrez désormais les différentes fêtes et événements
                  traditionnels au Maroc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
