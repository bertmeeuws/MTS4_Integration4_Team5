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
      1.5
      <Background />
      <div className="game-wrapper">
        {choices.map((choice) => {
          return (
            <button
              className="button__primary text__m-bold button__game-next"
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
        <button onClick={(e) => nextRoute()}>Volgende</button>
      </div>
    </section>
  );
}
