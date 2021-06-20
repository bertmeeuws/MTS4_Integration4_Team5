import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_6({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);

  const answer = useStoreState((state) => state.answer);
  const picture = useStoreState((state) => state.profile_picture);

  console.log(answer);

  return (
    <section className="section__post section__post__final background-yellow stretch-container">
      <p className="hidden">1.6</p>
      <Background />
      <div className="game-wrapper">
        <p></p>
        <div onClick={(e) => nextRoute()} className="post__container">
          <div className="post__image--overflow">
            <img style={{ height: "34.5rem" }} src={picture} />
          </div>
          <div className="post__comments__container">
            <p className="post__comment__author title__s-bold">Kareltje</p>
            <p className="text__m-normal post__comment">
              Afschuwelijke foto! 🤢
            </p>
          </div>
          <div className="post__comments__container">
            <p className="post__comment__author title__s-bold">Gebruiker</p>
            <p className="text__m-normal post__comment">
              {answer?.text?.substring(1, answer?.text?.length - 1)}
            </p>
          </div>
        </div>
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
