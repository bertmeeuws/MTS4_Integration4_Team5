import React, { useEffect } from "react";
import { action, useStoreActions, useStoreState } from "easy-peasy";
import axios from "axios";
import { API_URL } from "../../constants";
import Background from "../Background/Background";
import Image from "next/image";

export default function Dag1_3({ route, data }) {
  console.log(data);

  const user = useStoreState((state) => state.current_gamer);
  const current_followers = useStoreState((state) => state.followers);
  const setFollowers = useStoreActions((actions) => actions.setFollowers);
  console.log(user);

  useEffect(async () => {
    setFollowers(100);
    try {
      const response = await axios.post(`${API_URL}/points`, {
        followers: 100,
        student: user.id,
        order: 1,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="game__play-container">
      <div className="day__content-container">
        <h1 className="title__m-bold">Jouw foto staat online!</h1>
        <div className="spacer__s"></div>
        <p className="text__m-normal">
          Je hebt meteen 100 volgers gekregen door je foto!
        </p>
      </div>

      <div className="day__middle-center">
        <p className="text__m-normal">aantal volgers</p>
        <h1 className="title__xl-bold">100</h1>
      </div>

      <div className="onboarding__button-container">
        <button className="button__primary" onClick={(e) => nextRoute()}>
          Bekijk je foto op de feed
        </button>
      </div>
      <Background />
    </section>
  );
}
