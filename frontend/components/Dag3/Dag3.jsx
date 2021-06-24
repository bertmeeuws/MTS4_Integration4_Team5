import React from "react";
import { useStoreActions } from "easy-peasy";
import Image from "next/image";

export default function Dag3() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="game__content-container">

        <div className="onboarding-content-container">
          <h1 className="title__m-bold">Ondertussen is het woensdag. Eens kijken hoeveel mensen je foto leuk vinden.</h1>
          <div className="spacer__s"></div>
          <p className="text__m-normal">Laten we eens kijken naar hoe goed de foto die je maandag hebt upgeload het doet.</p>
        </div>
        
        <div className="onboarding__button-container">
          <button className="button__primary" onClick={(e) => nextRoute()}>bekijk je foto</button>
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
