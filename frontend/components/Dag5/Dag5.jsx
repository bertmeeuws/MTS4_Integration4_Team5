import React from "react";
import { useStoreActions } from "easy-peasy";
import Image from "next/image";

export default function Dag5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="game__content-container">

      <div className="onboarding-content-container">
        <h1 className="title__m-bold">Vandaag is het vrijdag, en het is rustig op sociale media.</h1>
        <div className="spacer__s"></div>
        <p className="text__m-normal">Ik neem eventjes de tijd om alles op te sommen van wat ik geleerd heb deze week.</p>
      </div>
      
      <div className="onboarding__button-container">
        <button className="button__primary" onClick={(e) => nextRoute()}>bekijk de tips</button>
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
