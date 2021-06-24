import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";

export default function Dag3_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const picture = useStoreState((state) => state.profile_picture);

  return (
    <section className="section__day3.1 center-middle background-yellow stretch-container">

      <Background />

      <div onClick={(e) => nextRoute()} className="game__day3__post">
        <img style={{ height: "14.8rem" }} src={picture} alt="" />
        <div className="game__day3__likes__container">
          <p className="text__s-normal">
            Kareltje en 2 anderen vinden dit leuk
          </p>
        </div>
      </div>
    </section>
  );
}
