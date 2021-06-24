import React from "react";
import { useStoreActions } from "easy-peasy";
import Image from "next/image";


export default function Dag2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (

    <section className="game__content-container">

        <div className="onboarding-content-container">
          <h1 className="title__m-bold">Nieuwe dag, nieuwe kansen.</h1>
          <div className="spacer__s"></div>
          <p className="text__m-normal">Het is dinsdag 7u30 ‘s ochtends. Klaar voor een nieuwe dag! Laten we snel eens BuddyGram checken!</p>
        </div>
        
        <div className="onboarding__button-container">
          <button className="button__primary" onClick={(e) => nextRoute()}>bekijk de feed</button>
        </div>

        <div className="image__clouds">
          <Image
            src="/assets/clouds.svg"
            width={1468}
            height={380}
            alt="zwevende wolkjes"
          />
      </div>

    </section>
  );
}
