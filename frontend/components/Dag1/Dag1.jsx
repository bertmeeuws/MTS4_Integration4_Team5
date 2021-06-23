import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Image from "next/image";

export default function Dag1() {
  
  const nextRoute = useStoreActions((actions) => actions.nextRoute);
  const gamer = useStoreState((state) => state.current_gamer);

  return (

    <section className="game__content-container">

        <div className="onboarding-content-container">
          <h1 className="title__m-bold">Welkom, {gamer?.name}! <br></br> vandaag is het maandag.</h1>
          <div className="spacer__s"></div>
          <p className="text__m-normal">Ga naar de fotostudio en plaats een foto op onze feed om de dag goed te starten.</p>
        </div>
        
        <div className="onboarding__button-container">
          <button className="button__primary" onClick={(e) => nextRoute()}>naar de fotostudio</button>
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
