import React from "react";
import Image from "next/image";
import { action, useStoreActions, useStoreState } from "easy-peasy";

export default function NavbarWithFollowers({ percent, text, followers }) {
  const amount = useStoreState((state) => state.followers);

  return (
    <div className="nav__buddygram-introduction">

      <p className="title__s-bold">BuddyGram</p>

      <div className="nav__buddygram-close">
        <Image src="/assets/img/kruis.svg" height={25} width={25} />
      </div>
      
      <div className={`nav__buddygram-today ${followers ? "nav__buddygram-today-active" : ""}`}>
        <p className="title__s-bold">{text}</p>
      </div>

      {followers ? (
        <div className="nav__buddygram-followers">
          <p className="title__s-bold">{amount} followers</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
