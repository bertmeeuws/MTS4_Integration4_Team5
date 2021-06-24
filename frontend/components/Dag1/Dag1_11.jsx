import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_11() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="day__middle-center">
      
      <Background />

      <div className="game-wrapper">
        
        <h1 className="title__m-bold game__textBox">Je hebt je niet kunnen afmelden</h1>
        
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}>
          Naar overzicht
        </button>
        
      </div>
    </section>
  );
}
