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
  const setRoute = useStoreActions((actions) => actions.setRouteAmount);
  const gamer = useStoreState((state) => state.current_gamer);
  const picture = useStoreState((state) => state.profile_picture);

  const choices = [
    {
      followers: -20,
      followers_text: "-20",
      text: "'Je bent zelf lelijk'",
      penalty: "Je hebt volgers verloren omdat je online ruzie maakt.",
      button: "Wat had ik beter gedaan?",
      action: () => {
        nextRoute();
      },
    },
    {
      followers: +20,
      followers_text: "+20",
      text: "'Iedereen is uniek en dat maakt juist iedereen mooi op zijn eigen manier'",
      penalty: "Dit is de juiste manier van aanpak, goed gedaan!",
      button: "Klik hier voor meer uitleg",
      action: () => {
        nextRoute();
      },
    },
    {
      followers: 0,
      followers_text: "+0",
      text: "Verwijder reactie",
      penalty:
        "Door de reactie te verwijderen toon je aan dat het je iets doet. Deze persoon kan nu weer een reactie posten om olie op het vuur te gooien.",
      button: "Wat had ik beter gedaan?",
      action: () => {
        setRoute(2);
      },
    },
    {
      followers: +10,
      text: "Blokkeer gebruiker",
      followers_text: "+10",
      penalty:
        "Je hebt een goeie keuze gemaakt, zo voorkom je dat deze persoon nog eens een negatieve reactie kan plaatsen.",
      button: "Wat kan ik ook doen?",
      action: () => {
        setRoute(2);
      },
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
    <section className="day__middle-center">
      <p className="hidden">1.5</p>

      <div className="game-wrapper">
        <div className="post__comments__grid">
          <div onClick={(e) => nextRoute()} className="post__container">
            <p className="title__s-bold">{gamer?.name}</p>
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
                    choice?.action();
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
