import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1_2({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  return (
    <section className="background-yellow stretch-container">
      1.2
      <div className="game-wrapper">
        <h1 className="title__m-bold">Sleep je foto in de feed!</h1>
        <p className="game__upload-subtext text__m-normal">
          Grijp de foto met je muis en sleep deze in de feed.
        </p>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Volgende
        </button>
      </div>
    </section>
  );
}
