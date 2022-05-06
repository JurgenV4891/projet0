import React, { Component } from "react";
import classes from "./Personne.module.css";

class Personne extends Component {
  render() {
    // on récupère les propriétés avec props, qui ne fait que de l'affichage
    const monStyle = {
      // css dynamique en utilisant la fonction style
      color: "yellow",
    };
    monStyle.fontSize = "12px";

    if (this.props.sexe) {
      monStyle.backgroundColor = "green";
    } else {
      monStyle.backgroundColor = "red";
    }

    // Pour les tests, soit if/else si pas dans du jsx sinon passer par des opérateurs ternaires ?,:

    return (
      <>
        <h1 className={classes.monTitre}>{this.props.nom}</h1>
        {this.props.children}
        <div style={monStyle}>Sexe: {this.props.sexe ? "Homme" : "Femme"}</div>
        <button onClick={this.props.clic}>Anniversaire +1</button>
      </>
    );
  }
}

export default Personne; // class donc majuscule
