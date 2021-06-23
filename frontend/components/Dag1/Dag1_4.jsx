import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag1_4({ route }) {
  
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  const picture = useStoreState((state) => state.profile_picture);

  return (
    <section className="section__post  background-yellow stretch-container">
      <Background />
      <div onClick={(e) => nextRoute()} className="post__container">
        <div className="post__image--overflow">
          <img style={{ height: "34.5rem" }} src={picture} />
        </div>
        <div className="post__comments__container">
          <p className="post__comment__author title__s-bold">Kareltje</p>
          <p className="text__m-normal post__comment">Afschuwelijke foto! 🤢</p>
        </div>
      </div>
    </section>
  );
}
