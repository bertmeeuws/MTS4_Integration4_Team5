import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_8({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">1.8</p>
      <Background />
      <div className="game-wrapper">
        <h1
          style={{ marginTop: "-1rem", marginBottom: "5rem" }}
          className="pixelated-font title__m-bold"
        >
          Als iemand zijn negatieve mening geeft dan is het beter om daar
          positief op te antwoorden
        </h1>
        <div className="post__container post__container__lesson">
          <div className="post__comments__container">
            <p className="post__comment__author title__s-bold">Kareltje</p>
            <p className="text__m-normal post__comment">
              Afschuwelijke foto! 🤢
            </p>
          </div>
          <div className="post__comments__container">
            <p className="post__comment__author title__s-bold">Gebruiker</p>
            <p className="text__m-normal post__comment">
              Iedereen is uniek op zijn eigen manier.
            </p>
          </div>
        </div>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Naar overzicht
        </button>
      </div>
    </section>
  );
}
