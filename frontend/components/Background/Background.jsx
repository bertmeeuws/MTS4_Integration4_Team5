import React from "react";
import Image from "next/image";

export default function Background() {
  return (
    <div className="background-image">
      <Image src="/assets/background.svg" layout="fill" objectFit="contain" />
    </div>
  );
}
