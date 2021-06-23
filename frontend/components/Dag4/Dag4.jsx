import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";
import Image from "next/image";

export default function Dag4() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="section__day4 center-middle background-yellow stretch-container">
      <p className="hidden">4.</p>
      <Background />

      <div className="game__box__margin game-wrapper">
        <h1 className="title__m-bold">
          Je hebt een bericht verzoek ontvangen van LianaDjok354
        </h1>
        <p className="text__m-normal">
          Donderdagochtend en het eerste dat je ziet op je smartphone is een
          bericht van LianaDjok354.
        </p>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Bekijk het bericht
        </button>
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
