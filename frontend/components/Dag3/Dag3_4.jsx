import React, { useState, useEffect } from "react";
import Background from "../Background/Background";
import { useStoreActions, useStoreState } from "easy-peasy";
import { TweenLite } from "gsap";
import axios from "axios";
import { API_URL } from "../../constants";

export default function Dag3_4({ data }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const picture = useStoreState((state) => state.profile_picture);
  const user = useStoreState((state) => state.current_gamer);
  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  const setAnswer = useStoreActions((actions) => actions.setAnswer);
  const setRoute = useStoreActions((actions) => actions.setRouteAmount);

  const choices = [
    {
      followers: +20,
      followers_text: "+20 Volgers",
      text: "Nee blijf likes tonen",
      penalty: "Goed dat je likes je humeur niet doet beïnvloeden.",
      button: "Naar overzicht",
      action: () => {
        nextRoute();
      },
    },
    {
      followers: -20,
      followers_text: "-20 Volgers",
      text: "Ja, verberg likes",
      penalty:
        "Laat likes je humeur niet beïnvloeden, een like zegt helemaal niets over hoe je bent.",
      button: "Naar overzicht",
      action: () => {
        nextRoute();
      },
    },
  ];

  const updateFollowers = async (followers) => {
    const updated = current_followers + followers;

    try {
      const response = await axios.post(`${API_URL}/points`, {
        followers: updated,
        student: user.id,
        order: 3,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">3.4</p>
      <Background />
      <div className="game-wrapper">
        <h1 className="title__m-bold">
          Er bestaat een functie om likes{" "}
          <marker
            style={{ backgroundColor: "var(--white)", color: "var(--black)" }}
            className="mark-blue"
          >
            onzichtbaar
          </marker>{" "}
          te zetten. <br />
          <br />
          Wil je deze functie inschakelen?
        </h1>
        <div className="game__day3__buttons">
          {choices.map((choice, key) => {
            return (
              <button
                className={`${
                  key === 1 ? "button__primary" : "button__secondary"
                } text__m-bold button__game-next`}
                onClick={(e) => {
                  setFollowers(current_followers + choice.followers);
                  setAnswer(choice);
                  updateFollowers(choice.followers);
                  choice?.action();
                }}
              >
                {choice?.text}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
