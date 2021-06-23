import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";
import Image from "next/image";

export default function Dag5() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="section__day5 center-middle background-yellow stretch-container">
      <p className="hidden">5.</p>
      <Background />
      <div className="game__box__margin game-wrapper">
        <h1 className="title__m-bold">
          Vandaag is het vrijdag, en het is rustig op sociale media.
        </h1>
        <p className="text__m-normal">
          Ik neem eventjes de tijd om alles op te sommen van wat ik geleerd heb
          deze week.
        </p>

        <button
          className="button__primary text__m-bold button__game-next"
          onClick={(e) => nextRoute()}
        >
          Bekijk de tips
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
