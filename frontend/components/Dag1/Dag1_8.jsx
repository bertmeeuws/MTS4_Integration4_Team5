import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_8({ route }) {

  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const answer = useStoreState((state) => state.answer);
  const gamer = useStoreState((state) => state.current_gamer);

  return (
    <section className="game__play-container">
      
      <Background />

      <div className="day__content-container">
        <h1 className="title__m-bold">Als iemand zijn negatieve mening geeft dan is het beter om daar
          positief op te antwoorden. Hun doel is om je slecht te laten voelen.</h1>
        <div className="spacer__s"></div>
      </div>

      <div className="game-wrapper">
        <div className="post__container post__container__lesson">
          <div className="post__comments__container">
            <p className="post__comment__author title__s-bold">Kareltje</p>
            <p className="text__m-normal post__comment">
              Afschuwelijke foto! 🤢
            </p>
          </div>
          <div className="post__comments__container">
            <p className="post__comment__author title__s-bold">{gamer?.name}</p>
            <p className="text__m-normal post__comment">
              Iedereen is uniek op zen eigen manier
            </p>
          </div>
        </div>
        <button
          className="button__primary"
          onClick={(e) => nextRoute()}
        >
          Naar overzicht
        </button>
      </div>
    </section>
  );
}
