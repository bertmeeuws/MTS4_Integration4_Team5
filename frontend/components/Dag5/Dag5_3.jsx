import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag5_3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const [id, setId] = useState(0);

  const tips = [
    "Als je gevoelig bent om emotioneel te reageren op veel of weinig likes, verberg ze dan.",
    "Wanneer een gebruiker vaak haatcomments schrijft is het best om die persoon te blokkeren.",
    "Iedereen heeft het recht om een reactie te schrijven. Maar probeer het positief te houden.",
    "Als je vreemde spamberichten ontvangt, klik dan nooit op een link, maar verwijder die meteen.",
  ];

  const next = () => {
    let index = id;
    index++;
    setId(index);
  };

  return (
    <section className="background-yellow stretch-container">
      5.3
      <Background />
      <div className="game-wrapper">
        <h1 className="title__m-bold hidden">TIPS</h1>

        {tips.map((element, key) => {
          if (key <= id) {
            return (
              <p className="game__textBox-small title__s-bold">{element}</p>
            );
          }
        })}
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => {
            id === 3 ? nextRoute() : next();
          }}
        >
          {id === 3 ? "Naar overzicht" : "Bekijk de volgende tip"}
        </button>
      </div>
    </section>
  );
}
