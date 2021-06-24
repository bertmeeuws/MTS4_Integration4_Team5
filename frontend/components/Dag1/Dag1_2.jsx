import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Background from "../Background/Background";
import Draggable from "react-draggable";
import Image from "next/image";

export default function Dag1_2({ route }) {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const image = useStoreState((state) => state.profile_picture);

  const handleStop = (e) => {
    console.log(e);
    nextRoute();
  };

  return (
    <section className="game__play-container">
      <div className="day__content-container">
        <h1 className="title__m-bold">Sleep je foto in de feed!</h1>
        <div className="spacer__s"></div>
        <p className="text__m-normal">
          Grijp de foto met je muis en sleep deze in de feed.
        </p>
      </div>

      <div className="game-wrapper">
        <div className="game__image__drag">
          <Draggable onStop={handleStop}>
            <div
              style={{
                overflow: "none",
                height: "20rem",
                width: "20rem",
                zIndex: "8",
              }}
            >
              <img id="output" className="image__drag" src={image} />
            </div>
          </Draggable>
          <Image src="/dragarrow.svg" height={178} width={178} />
          <Image src="/globe.svg" height={178} width={178} />
        </div>
      </div>

      <div className="image__gridYellow">
        <img
          src="/assets/img/gridyellow.svg"
          width={528}
          height={671}
          alt="grid illustratie"
        />
      </div>
      <Background />
    </section>
  );
}
