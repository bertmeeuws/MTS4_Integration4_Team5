import React, { useState, useEffect } from "react";
import Background from "../Background/Background";
import { useStoreActions, useStoreState } from "easy-peasy";
import { TweenLite } from "gsap";
import axios from "axios";
import { API_URL } from "../../constants";

export default function Dag2_2({ data }) {
  const [animate, setAnimate] = useState(false);

  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const picture = useStoreState((state) => state.profile_picture);
  const user = useStoreState((state) => state.current_gamer);
  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  const setAnswer = useStoreActions((actions) => actions.setAnswer);
  const setRoute = useStoreActions((actions) => actions.setRouteAmount);

  useEffect(() => {
    TweenLite.from(".game__day2__container--first", 0.8, {
      scale: 0,
      opacity: 0,
      ease: "power2",
    });
    TweenLite.from(".game__day2__profile--first", 0.8, {
      scale: 0,
      opacity: 0,
      delay: 0.3,
      ease: "power2",
    });
  }, []);

  const choices = [
    {
      followers: -20,
      followers_text: "-20 Volgers",
      text: "Post behouden",
      penalty:
        "Je hebt volgers verloren omdat je de post niet hebt verwijderd.",
      button: "Wat had ik beter gedaan?",
      action: () => {
        setAnimate(true);
        TweenLite.to(".game__day2__container--hate", 0.8, {
          scale: 1,
          opacity: 100,
          ease: "power2",
        });
        TweenLite.to(".game__day2__profile--hate", 0.8, {
          scale: 1,
          opacity: 100,
          delay: 0.3,
          ease: "power2",
        });
      },
    },
    {
      followers: +20,
      followers_text: "+20 Volgers",
      text: "Post verwijderen",
      penalty:
        "Je hebt de post verwijderd, als je dit niet had gedaan kon je in de problemen gekomen zijn.",
      button: "Ga verder",
      action: () => {
        //setAnimate(true);
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
        order: 3,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="background-yellow stretch-container">
      <Background />
      <p className="hidden">2.2</p>
      <div className="game-wrapper">
        <div className="game__day2__box">
          <div className="game__day2__container game__day2__container--first">
            <div className="game__day2__profile game__day2__profile--first">
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
          <div className="game__day2__container game__day2__container--hate">
            <div className="game__day2__profile game__day2__profile--hate">
              <p className="game__day2__profile__name">Carl</p>
              <div className="game__day2__profile__image"></div>
            </div>
            <p className="text__m-normal game__day2__comment game__day2__comment__left">
              Dit ga ik aan de leerkracht vertellen!
            </p>
          </div>
        </div>

        {animate ? (
          <button
            onClick={(e) => setRoute(2)}
            className="button__primary text__m-bold button__game-next"
          >
            Feed afsluiten
          </button>
        ) : (
          choices.map((choice) => {
            return (
              <button
                className="button__primary text__m-bold button__game-next"
                onClick={(e) => {
                  setFollowers(current_followers + choice.followers);
                  setAnswer(choice);
                  //updateFollowers(choice.followers);
                  choice?.action();
                }}
              >
                {choice?.text}
              </button>
            );
          })
        )}
      </div>
    </section>
  );
}
