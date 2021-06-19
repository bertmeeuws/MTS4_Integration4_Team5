import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
import { API_URL } from "../../constants";
import Background from "../Background/Background";

export default function Dag1_5({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const user = useStoreState((state) => state.current_gamer);

  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  const setAnswer = useStoreActions((actions) => actions.setAnswer);
  const picture = useStoreState((state) => state.profile_picture);

  const choices = [
    {
      followers: -20,
      text: "'Je bent afschuwelijk'",
      penalty: "Je hebt volgers verloren omdat je online ruzie maakt.",
    },
    {
      followers: 0,
      text: "'Iedereen is uniek en dat maakt juist iedereen mooi op zijn eigen manier'",
      penalty:
        "Het is beter om niet te reageren op de haatreactie. Of zelfs nog beter om die gewoon te verwijderen.",
    },
    {
      followers: 20,
      text: "Verwijder reactie",
      penalty:
        "Je hebt de juiste keuze gemaakt, mensen die haatreacties posten willen aandacht. Je moet hun hun niet geven.",
    },
    {
      followers: 10,
      text: "Blokkeer gebruiker",
      penalty:
        "Je hebt de juiste keuze gemaakt, mensen die haatreacties posten willen aandacht. Je moet hun hun niet geven.",
    },
  ];

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
      <p className="hidden">1.5</p>
      <Background />
      <div className="game-wrapper">
        <div className="post__comments__grid">
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
          </div>
          <div className="post__container__options">
            <p className="post__comments__options--title">
              Hoe zou je hier op reageren?
            </p>
            {choices.map((choice) => {
              return (
                <button
                  className="text__m-normal post__comment__option"
                  onClick={(e) => {
                    setFollowers(current_followers + choice.followers);
                    setAnswer(choice);
                    updateFollowers(choice.followers);
                    nextRoute();
                  }}
                >
                  {choice.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
