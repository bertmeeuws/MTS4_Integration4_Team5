import React, { useState, useEffect } from "react";
import Background from "../Background/Background";
import { useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
import { API_URL } from "../../constants";
import Image from "next/image";

export default function Dag4_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const picture = useStoreState((state) => state.profile_picture);
  const user = useStoreState((state) => state.current_gamer);
  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  const setAnswer = useStoreActions((actions) => actions.setAnswer);
  const setRoute = useStoreActions((actions) => actions.setRouteAmount);

  const choices = [
    {
      followers: -30,
      followers_text: "-30",
      text: "Spam bericht klikken",
      penalty: "Je hebt volgers verloren door op een spambericht te klikken.",
      button: "Wat had ik beter gedaan?",
      action: () => {},
    },
    {
      followers: +30,
      followers_text: "+30",
      text: "Verwijderen",
      penalty:
        "Goed gedaan, klik nooit zomaar op links van mensen die je niet kent.",
      button: "Verder gaan",
      action: () => {},
    },
    {
      followers: 0,
      followers_text: "+0",
      text: "Reageren",
      penalty:
        "Je hebt gereageerd op een spambericht, vaak is er een betere optie.",
      button: "Wat had ik beter gedaan?",
      action: () => {},
    },
  ];

  const updateFollowers = async (followers) => {
    const updated = current_followers + followers;

    try {
      const response = await axios.post(`${API_URL}/points`, {
        followers: updated,
        student: user.id,
        order: 6,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="section__day4_1 center-middle background-yellow stretch-container">
      <p className="hidden">4.1</p>
      <Background />
      <div className="center-middle game__box__margin game-wrapper">
        <div className="game__message__container">
          <p className="game__message__author title__s-bold">LianaDjok354</p>
          <div className="game__message__profile">
            <Image src="/assets/anonymous.png" height={60} width={60} />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              setAnswer(choices[1]);
              updateFollowers(choices[1].followers);
              choices[1].action();
              setRoute(2);
            }}
            className="game__message__quit"
          >
            <Image src="/assets/quit.svg" height={25} width={25} />
          </div>
          <div className="game__message__content">
            <p>
              Hey leuk je te ontmoeten! Wil je me beter leren kennen? Druk dan
              op het linkje!
            </p>
            <br />
            <p
              onClick={(e) => {
                setAnswer(choices[0]);
                updateFollowers(choices[0].followers);
                choices[0].action();
                nextRoute();
              }}
              className="game__message--link"
            >
              http://like.me/qmsd/id=4/?php.rs
            </p>
          </div>
          <div className="game__chat__container">
            <div className="game__chat__input">
              <p
                onClick={(e) => {
                  setAnswer(choices[2]);
                  updateFollowers(choices[2].followers);
                  choices[2].action();
                  setRoute(2);
                }}
                className="game__chat--answer"
              >
                Typ een antwoord...
              </p>
            </div>
            <div className="game__chat__arrow">
              <Image src="/assets/arrow.svg" height={25} width={15} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
