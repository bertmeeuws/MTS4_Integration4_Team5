import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function Dag1_5({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

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

  return (
    <section className="background-yellow stretch-container">
      1.5
      <div className="game-wrapper">
        {choices.map((choice) => {
          return (
            <button
              className="button__primary text__m-bold button__game-next"
              onClick={(e) => {
                setFollowers(current_followers + choice.followers);
                setAnswer(choice);
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
