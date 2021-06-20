import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";
import axios from "axios";
import { API_URL } from "../../constants";

export default function Dag2_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const user = useStoreState((state) => state.current_gamer);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  const setAnswer = useStoreActions((actions) => actions.setAnswer);
  const setRoute = useStoreActions((actions) => actions.setRouteAmount);

  const picture = useStoreState((state) => state.profile_picture);

  const choices = [];

  const updateFollowers = async (followers) => {
    const updated = current_followers + followers;

    try {
      const response = await axios.post(`${API_URL}/points`, {
        followers: updated,
        student: user.id,
        order: 2,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="background-yellow stretch-container">
      <Background />
      2.3
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
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Feed afsluiten
        </button>
      </div>
    </section>
  );
}
