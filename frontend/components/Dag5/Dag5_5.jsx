import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
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
      nextRoute();
    } catch (e) {
      nextRoute();
    }
  };

  return (
    <section className="section__5_5 center-middle background-yellow stretch-container">
      
      <Background />

      <div className="game-wrapper">

        <h1 className="title__m-bold game__textBox">Ben je slachtoffer (geweest) van cyberpesten en wil je erover praten met de leerkracht in privé?</h1>
        
        <div className="game__privatechat__buttons">

          <button
            className="button__primary"
            onClick={(e) => handleForm()}>
            Ik wil praten met de leerkracht
          </button>

          <button
            className="button__secondary"
            onClick={(e) => nextRoute()}>
            De laatste reflectie
          </button>

        </div>
      </div>
    </section>
  );
}
