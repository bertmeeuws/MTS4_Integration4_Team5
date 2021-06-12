import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Onboarding4() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);
  return (
    <section className="introduction background-yellow stretch-container">
      <div className="introduction-container">
        <h1 className="h1">Personaliseer je eigen account</h1>
        <p>Verander de kleuren van je account zoals jij het wil!</p>
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
