import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function Dag1({ route }) {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);

  const profile = useStoreState((state) => state.profile);

  const [name, surname] = profile.split(" ");

  console.log(name);

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
          className="button-primary-blue"
          onClick={(e) => {
            changeRoute(route++);
          }}
        >
          Start BuddyGram op
        </button>
      </div>
    </section>
  );
}
