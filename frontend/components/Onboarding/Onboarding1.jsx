import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";
import ProgressBar from "./ProgressBar";

export default function Onboarding1() {

  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="game__content-container">
      
      <NavBar percent={2} />

        <div className="onboarding-content-container">
          <p className="text__m-bold text__blue">1/3 inschatten</p>
          <div className="spacer__xs"></div>
          <h1 className="title__m-bold"><marker className="mark-white">Elke dag</marker>kan er wel iets gebeuren.</h1>
          <div className="spacer__s"></div>
          <p className="text__m-normal"> We nemen je mee op een fictief avontuur met het sociale media platform genaamd ‘BuddyGram’.</p>
        </div>
        
        <div className="onboarding__button-container">
          <button className="button__primary" onClick={(e) => nextRoute()}>ontdek hoe je volgers kan krijgen</button>
        </div>

      <ProgressBar step={1} />

    </section>
  );
}
