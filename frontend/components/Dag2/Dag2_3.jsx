import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";
import axios from "axios";
import { API_URL } from "../../constants";
import SwipeToUnlock from "../SwipeToUnlock/SwipeToUnlock";

export default function Dag2_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const user = useStoreState((state) => state.current_gamer);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  const setAnswer = useStoreActions((actions) => actions.setAnswer);
  const setRoute = useStoreActions((actions) => actions.setRouteAmount);

  const picture = useStoreState((state) => state.profile_picture);

  const choices = [];

  return (
    <section className="center-middle background-yellow stretch-container">
      <Background />
      <p className="hidden">2.3</p>
      <div className="game-wrapper">
        <div className="game__day2__box">
          <div className="game__day2__profile">
            <p className="game__day2__profile__name">{user?.name}Test</p>
            <div className="game__day2__profile__image">
              <img src={picture} alt="" />
            </div>
          </div>
          <p className="text__m-normal game__day2__comment game__day2__comment__left">
            Ik had gisteren alle antwoorden van het examen in mijn pennenzak
            gestopt.
          </p>
        </div>
        <button
          className="button__primary"
          onClick={(e) => nextRoute()}>
          Feed afsluiten
        </button>
      </div>
    </section>
  );
}
