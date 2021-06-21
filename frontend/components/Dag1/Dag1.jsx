import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Image from "next/image";

export default function Dag1({ route, data }) {
  const user = useStoreState((state) => state.user);
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const gamer = useStoreState((state) => state.current_gamer);

  console.log(data);

  return (
    <section className="background-yellow stretch-container onboarding-1">
      <div className="introduction-container">
        <h1 className="title__m-bold">
          Welkom,
          <marker
            style={{ backgroundColor: "var(--white)" }}
            className="mark-yellow"
          >
            {gamer?.name}
          </marker>{" "}
          Vandaag is het maandag
        </h1>
        <p className="onboarding2__text day1__text ">
          In de volgende stap kan je een foto maken of uploaden en daarna op je
          feed plaatsen.
        </p>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Naar de fotostudio
        </button>
      </div>
      <img
        className="image__clouds__background"
        src="/assets/clouds.svg"
        width="1468"
        height="380"
        alt=""
      />
    </section>
  );
}
