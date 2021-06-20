import React from "react";
import { useStoreActionsn, useStoreState } from "easy-peasy";
import Background from "../Background/Background";
import axios from "axios";
import { API_URL } from "../../constants";

export default function Dag5_5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const user = useStoreState((state) => state.current_gamer);

  const handleForm = async () => {
    try {
      const response = await axios.put(`${API_URL}/students/${user.id}`, {
        private_chat: true,
      });
      console.log(response);
      nextRoute();
    } catch (e) {}
  };

  return (
    <section className="background-yellow stretch-container">
      5.5
      <Background />
      <div className="game-wrapper">
        <h1 className="title__m-bold">
          Ben je slachtoffer (geweest) van cyberpesten en wil je erover praten
          met de leerkracht in privé?
        </h1>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => handleForm()}
        >
          Ik wil praten
        </button>
        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Afsluiten
        </button>
      </div>
    </section>
  );
}
