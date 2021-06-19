import React from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";
import Image from "next/image";

export default function Dag4_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">4.1</p>
      <Background />
      <div className="center-middle game__box__margin game-wrapper">
        <div className="game__message__container">
          <p className="game__message__author title__s-bold">LianaDjok354</p>
          <div className="game__message__profile">
            <Image src="/assets/anonymous.png" height={60} width={60} />
          </div>
          <div className="game__message__quit">
            <Image src="/assets/quit.svg" height={25} width={25} />
          </div>
          <div className="game__message__content">
            <p>
              Hey leuk je te ontmoeten! Wil je me beter leren kennen? Druk dan
              op het linkje!
            </p>
            <br />
            <p className="game__message--link">
              http://like.me/qmsd/id=4/?php.rs
            </p>
          </div>
          <div className="game__chat__container">
            <div className="game__chat__input">
              <p className="game__chat--answer">Typ een antwoord...</p>
            </div>
            <div className="game__chat__arrow">
              <Image src="/assets/arrow.svg" height={25} width={15} />
            </div>
          </div>
        </div>
        <button onClick={(e) => nextRoute()}>Volgende</button>
      </div>
    </section>
  );
}
