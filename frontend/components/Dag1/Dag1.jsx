import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

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
          op deze maandag. Deel een foto met de wereld.
        </h1>
        <p>
          In de volgende stap kan je een foto maken of uploaden en daarna op je
          feed plaatsen.
        </p>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Start buddygram op
        </button>
      </div>
    </section>
  );
}
