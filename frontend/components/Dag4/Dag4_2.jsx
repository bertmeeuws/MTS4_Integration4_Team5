import React, { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";
import Background from "../Background/Background";
import Image from "next/image";

export default function Dag4_2() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const [amount, setAmount] = useState(1);

  const array = ["", "", "", "", "", "", ""];

  const waitFor = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));

  useEffect(async () => {
    await waitFor(150);
    setAmount(2);
    await waitFor(150);
    setAmount(3);
    await waitFor(150);
    setAmount(4);
    await waitFor(150);
    setAmount(5);
    await waitFor(150);
    setAmount(6);
    await waitFor(150);
    setAmount(7);
    await waitFor(1000);
    nextRoute();
  }, []);

  return (
    <section className="background-yellow stretch-container">
      <p className="hidden">4.2</p>
      <Background />
      <div className="center-middle game-wrapper">
        <div className="game__error__container">
          {array.map((element, key) => {
            if (key < amount) {
              return (
                <div
                  style={{ top: 2 * key + "rem", left: 2 * key + "rem" }}
                  className="game__error__item"
                >
                  <Image src="/assets/error.svg" height={370} width={599} />
                </div>
              );
            }
          })}
        </div>
        <button onClick={(e) => nextRoute()}>Volgende</button>
      </div>
    </section>
  );
}
