import React from "react";
import Image from "next/image";

export default function Background() {
  return (
    <div className="game__background">
      <div className="game__background__thumbRed">
        <Image width={155} height={155} src="/assets/img/thumbRed.svg" />
      </div>
      <div className="game__background__blueCircle">
        <Image width={109} height={109} src="/assets/img/blueCircle.svg" />
      </div>
      <div className="game__background__blueCross">
        <Image width={78.11} height={78.11} src="/assets/img/bluecross.svg" />
      </div>
      <div className="game__background__bluePill">
        <Image width={30} height={90} src="/assets/img/pillBlue.svg" />
      </div>
      <div className="game__background__yellowSmiley">
        <Image width={160} height={160} src="/assets/img/yellowSmiley.svg" />
      </div>
    </div>
  );
}
