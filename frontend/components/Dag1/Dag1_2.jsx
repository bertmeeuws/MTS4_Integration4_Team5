import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_2({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const image = useStoreState((state) => state.profile_picture);

  return (
    <section className="background-yellow stretch-container">
      1.2
      <Background />
      <div className="game-wrapper">
        <h1 className="title__m-bold">Sleep je foto in de feed!</h1>
        <p className="game__upload-subtext text__m-normal">
          Grijp de foto met je muis en sleep deze in de feed.
        </p>
        <div style={{ overflow: "none", height: "14.8rem", width: "14.8rem" }}>
          <img id="output" style={{ height: "14.8rem" }} src={image} />
        </div>

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
