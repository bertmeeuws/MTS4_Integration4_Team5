import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function Dag1_6({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);

  const answer = useStoreState((state) => state.answer);

  return (
    <section className="background-yellow stretch-container">
      1.6
      <div className="game-wrapper">
        <p>Je koos</p>
        <p>{answer.text}</p>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Feed afsluiten
        </button>
      </div>
    </section>
  );
}
