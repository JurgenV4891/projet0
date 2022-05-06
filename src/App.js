import React, { Component } from "react";
import Personne from "./components/Personne/Personne";
import Horloge from "./containers/Horloge/Horloge";
import AgePersonne from "./components/Personne/AgePersonne/AgePersonne";
import "./App.css";

class App extends Component {
  // qd c'est une fonction: mettre en minuscule & concept d'héritage: donne accès aux attributs et fonctions de la classe "mère"
  state = {
    personnes: [
      { id: 1, nom: "Julien", age: 37, sexe: true },
      { id: 2, nom: "Kali", age: 2, sexe: false },
      { id: 5, nom: "JJJ", age: 73, sexe: true },
      { id: 7, nom: "Jay", age: 35, sexe: true },
    ],
  };

  anniversaireHandler = (id) => {
    const numCaseTabPersonne = this.state.personnes.findIndex((element) => {
      return element.id === id;
    });

    const newPersonne = { ...this.state.personnes[numCaseTabPersonne] }; // génère une copie de la personne sur laquelle on a cliquer
    newPersonne.age++; // augmente l'âge de la personne copiée

    const newTab = [...this.state.personnes]; // on duplique le tableau de personne
    newTab[numCaseTabPersonne] = newPersonne; // on remplace la personne à l'indice du tableau sur lequel on a cliqué par la nouvelle personne qu'on a créée
    this.setState({ personnes: newTab }); // on remplace dans le state le tableau de personnes par le nouveau tableau

    // lorsqu'on fait une fonction liée à un évènement on l'appelle ...Handler ou handler...
    // const newPersonnes = this.state.personnes.map((personne) => {
    //   return {
    //     nom: personne.nom,
    //     age: personne.age + 1,
    //     sexe: personne.sexe,
    //   };
    // });
    // // for (let i = 0; i < newPersonnes.length; i++) {
    // //   newPersonnes[i].age++;
    // // }
    // this.setState({ personnes: newPersonnes }); // on respecte bien l'immutabilité puisqu'on crée une nouvelle valeur à partir du précédent tableau, qui est une réel copie et non une copie de la référence du tableau
  };

  render() {
    // qd système de classe alors la fonction render est obligatoire
    return (
      // A la place de Fragment, on peut écrire React.Fragment et ne pas le mettre dans les imports. On peut aussi utiliser seulement des chevrons vides ouverts et fermés à la place de Fragment
      <>
        {/* <button onClick={this.anniversaireHandler}>Anniversaire</button> */}
        <Horloge />
        {this.state.personnes.map((personne) => {
          // La fonction map retourne un tableau qu'on est capable d'afficher en JSX directement un tableau
          return (
            <Personne
              key={personne.id}
              {...personne}
              clic={() => this.anniversaireHandler(personne.id)}
            >
              <AgePersonne age={personne.age} />
            </Personne>
          );
        })}
      </>
    );
  }
}

export default App;
