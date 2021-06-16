import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";

export default function Onboarding4() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);
  

  return (
    <section className="introduction background-yellow stretch-container">
      <NavBar percent={8} />
      <div className="introduction-container">
        <h1 className="h2 margin-top align-center">
          Personaliseer je eigen account
        </h1>
        <p className="align-center">
          Verander de kleuren van je account zoals jij het wil!
        </p>
        <div className="introduction-list">
          <button
            className="button-secondary-white"
            onClick={(e) => {
              changeRoute(3);
            }}
          >
            Stap terug
          </button>
          <button
            className="button-primary-blue"
            onClick={(e) => {
              changeRoute(5);
            }}
          >
            Start BuddyGram op
          </button>
        </div>
      </div>
    </section>
  );
}
