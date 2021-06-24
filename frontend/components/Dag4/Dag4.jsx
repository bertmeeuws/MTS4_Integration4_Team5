import React from "react";
import { useStoreActions } from "easy-peasy";
import Image from "next/image";

export default function Dag4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="game__content-container">

        <div className="onboarding-content-container">
          <h1 className="title__m-bold">Je hebt een bericht verzoek ontvangen van LianaDjok354</h1>
          <div className="spacer__s"></div>
          <p className="text__m-normal">Donderdagochtend en het eerste dat je ziet op je smartphone is een bericht van LianaDjok354.</p>
        </div>
        
        <div className="onboarding__button-container">
          <button className="button__primary" onClick={(e) => nextRoute()}>bekijk het bericht</button>
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
