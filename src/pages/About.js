import React, { Component } from "react";
/*import "../style/CSS/about.css";*/

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="navbar">
            <img
              src="assets/Pictures/Logo.png"
              className="logo"
              style={{ width: 80, height: 80, borderRadius: 8 }}
            />
            <nav>
              <ul>
                <li>
                  <a href="#">Acceuil</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">À propos de Nous</a>
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
              <div className="card card1">
                <h5>Cuisine Marocaine</h5>
                <p>
                  Découvrez désormais l'art culinaire marocain de toutes les
                  régions du Maroc.
                </p>
              </div>
              <div className="card card2">
                <h5>Architecture Marocaine</h5>
                <p>
                  Découvrez désormais une architecture ancienne et moderne du
                  Maroc.
                </p>
              </div>
              <div className="card card3">
                <h5>Villes Marocaines</h5>
                <p>
                  Découvrez désormais le Nord, le Sud, l'Est ou encore l'Ouest
                  du Maroc.
                </p>
              </div>
              <div className="card card4">
                <h5>Sculpture Marocaine</h5>
                <p>
                  Découvrez désormais l'art de la sculpture de nos artisans
                  marocains.
                </p>
              </div>
              <div className="card card5">
                <h5>Nature Marocaine</h5>
                <p>
                  Découvrez désormais la beauté incomparable de la nature au
                  Maroc.
                </p>
              </div>
              <div className="card card6">
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
