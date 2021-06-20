import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_8({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const answer = useStoreState((state) => state.answer);
  console.log(answer);

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">1.8</p>
      <Background />
      <div className="game-wrapper">
        <h1
          style={{ marginTop: "4rem", marginBottom: "5rem" }}
          className="pixelated-font title__s-bold"
        >
          Als iemand zijn negatieve mening geeft dan is het beter om daar
          positief op te antwoorden. Hun doel is om je{" "}
          <marker className="mark-red2">slecht te laten voelen</marker> in je
          vel. <br />
          <br />
          Toon dus niet aan dat dit iets doet met je.
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
              Iedereen is uniek op zen eigen manier
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
