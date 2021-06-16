import React from "react";
import Image from "next/image";

export default function NavbarWithFollowers({ percent, text, followers }) {
  return (
    <nav className="nav__buddygram-introduction">
      <div className="nav__buddygram-wrapper">
        <p className="nav__buddygram-title">BuddyGram</p>
      </div>
      <div className="nav__buddygram-close">
        <Image src="/assets/img/kruis.svg" height={25} width={25} />
      </div>
      <div
        className={`nav__buddygram-today ${
          followers ? "nav__buddygram-today-active" : ""
        }`}
      >
        <p className="title__s-bold">{text}</p>
      </div>
      {followers ? (
        <div className="nav__buddygram-followers">
          <p className="title__s-bold">60 followers</p>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
