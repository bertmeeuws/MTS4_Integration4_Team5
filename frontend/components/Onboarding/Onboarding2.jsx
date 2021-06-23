import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";
import ProgressBar from "./ProgressBar";

export default function Onboarding2() {
  const previousRoute = useStoreActions((actions) => actions.previousRoute);

  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (

    <section className="game__content-container">
      
      <NavBar percent={4} />

        <div className="onboarding-content-container">
          <p className="text__m-bold text__blue">2/3 yeey!</p>
          <div className="spacer__xs"></div>
          <h1 className="title__m-bold"><marker className="mark-white">verdien</marker>volgers.</h1>
          <div className="spacer__s"></div>
          <p className="text__m-normal">Schat de situatie zo goed mogelijk in en verdien zo veel mogelijk volgers.</p>
        </div>
        
        <div className="onboarding__button-container">
          <button className="button__secondary" onClick={(e) => previousRoute()}>stap terug</button>
          <button className="button__primary" onClick={(e) => nextRoute()}>ontdek hoe je volgers verliest</button>
        </div>

      <ProgressBar step={2} />

    </section>
  );
}
