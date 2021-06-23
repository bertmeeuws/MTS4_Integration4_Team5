import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
import { API_URL } from "../../constants";
import Background from "../Background/Background";
import Image from "next/image";

export default function Dag3_2({ data }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const user = useStoreState((state) => state.current_gamer);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  const setAnswer = useStoreActions((actions) => actions.setAnswer);
  const setRoute = useStoreActions((actions) => actions.setRouteAmount);

  const choices = [
    {
      followers: -20,
      followers_text: "-20",
      text: "Verwijder post",
      penalty: "Je laat je humeur beïnvloeden door likes.",
      image: "/assets/deletepost.svg",
      button: "Wat kan ik hier aan doen?",
      action: () => {
        nextRoute();
      },
    },
    {
      followers: -20,
      followers_text: "-20",
      text: "Ik wil meer likes",
      penalty: "Je laat je humeur beïnvloeden door likes.",
      image: "/assets/morelikes.svg",
      button: "Wat kan ik hier aan doen?",
      action: () => {
        nextRoute();
      },
    },
    {
      followers: 20,
      followers_text: "+20",
      text: "Maakt helemaal niets uit",
      penalty:
        "Goed gekozen, likes zijn niet de realiteit dus laat jezelf niet beïnvloeden hierdoor.",
      image: "/assets/doesntmatter.svg",
      button: "Verder gaan",
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
        order: 4,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="section__day3_2 center-middle background-yellow stretch-container">
      <Background />
      <p className="hidden">3.2</p>
      <div className="game-wrapper">
        <h1 className="title__m-bold">
          Je hebt 3 likes en 0 reacties.
          <br />
          Hoe voel je jou daarbij ?
        </h1>
        <ul className="game__day3__list">
          {choices.map((choice) => {
            return (
              <li
                onClick={(e) => {
                  setFollowers(current_followers + choice.followers);
                  setAnswer(choice);
                  updateFollowers(choice.followers);
                  choice?.action();
                }}
              >
                <Image src={choice.image} width={150} height={150} />
                <p className="title__xs-bold">{choice.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
