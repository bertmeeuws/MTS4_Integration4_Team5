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
    <section className="background-yellow stretch-container">
      <p className="hidden">1.2</p>

      <div className="game-wrapper">
        <h1 className="title__m-bold">Sleep je foto in de feed!</h1>
        <p className="game__upload-subtext text__m-normal">
          Grijp de foto met je muis en sleep deze in de feed.
        </p>
        <div className="game__image__drag">
          <Draggable onStop={handleStop}>
            <div
              style={{
                overflow: "none",
                height: "14.8rem",
                width: "14.8rem",
                zIndex: "8",
              }}
            >
              <img id="output" style={{ height: "14.8rem" }} src={image} />
            </div>
          </Draggable>
          <Image src="/dragarrow.svg" height={178} width={178} />
          <Image src="/globe.svg" height={178} width={178} />
        </div>
      </div>
      <Image src="/assets/raster.svg" width={1040} height={528} />
    </section>
  );
}
