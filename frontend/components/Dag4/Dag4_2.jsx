import React, { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";
import Image from "next/image";

export default function Dag4_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const [array, setArray] = useState([
    <div
      style={{ left: key * 2 + "rem", top: key * 2 + "rem" }}
      className="game__error__item"
    >
      <Image src="/assets/error.svg" height={370} width={599} />
    </div>,
  ]);

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    renderErrors();
  }, []);

  renderErrors = async () => {
    await timeout(1000);
  };

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">4.2</p>
      <Background />
      <div className="center-middle game-wrapper">
        <div className="game__error__container">
          {/*array.map((item, key) => {
            return item;
          })*/}
        </div>
        <button onClick={(e) => nextRoute()}>Volgende</button>
      </div>
    </section>
  );
}
