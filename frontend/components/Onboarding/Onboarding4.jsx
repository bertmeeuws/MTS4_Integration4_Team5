import React from "react";
import { useStoreActions } from "easy-peasy";

export default function Onboarding4() {
  const changeRoute = useStoreActions((actions) => actions.changeRoute);
  return (
    <section className="introduction">
      <div className="introduction-container">
        <h1 className="h1">Personaliseer je eigen account</h1>
        <p>Verander de kleuren van je account zoals jij het wil!</p>
        <div className="introduction-list">
          <button
            onClick={(e) => {
              changeRoute(3);
            }}
          >
            Stap terug
          </button>
          <button
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
