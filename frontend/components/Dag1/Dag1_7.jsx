import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";


export default function Dag1_7({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);

  const answer = useStoreState((state) => state.answer);

  return (
    <section className="background-yellow stretch-container">
      <div className="game-wrapper">
      <Background />
        1.7
        <div className="game__textBox">
          <p>-20 volgers</p>
          <p>Je koos</p>
          <p>{answer.followers}</p>
          <p>{answer.text}</p>
          <h1 className="title__m-bold">{answer.penalty}</h1>
        </div>
        <button onClick={(e) => nextRoute()}>Wat had ik beter gedaan?</button>
      </div>
    </section>
  );
}
