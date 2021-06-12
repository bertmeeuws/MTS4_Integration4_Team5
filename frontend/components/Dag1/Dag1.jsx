import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Dag1() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);

  return (
    <section className="introduction background-yellow stretch-container">
      <div className="introduction-container">
        <h1 className="h1">
          Welkom, NAMEHERE op deze maandag. Deel een foto met de wereld.
        </h1>
        <p>
          In de volgende stap kan je een foto maken of uploaden en daarna op je
          feed plaatsen.
        </p>

        <button
          onClick={(e) => {
            changeRoute(6);
          }}
        >
          Start BuddyGram op
        </button>
      </div>
    </section>
  );
}
