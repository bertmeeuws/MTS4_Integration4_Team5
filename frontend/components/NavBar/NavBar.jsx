import React from "react";
import Image from "next/image";

export default function NavBar({ percent }) {
  const renderBars = () => {
    let idents = [];

    for (let i = 0; i < percent; i++) {
      idents.push(<div className="battery-block"></div>);
    }
    console.log(idents);
    return idents;
  };

  return (
    <nav className="nav__buddygram-introduction">
      <div className="nav__buddygram-wrapper">
        <p className="nav__buddygram-title">BuddyGram</p>
      </div>
      <div className="nav__buddygram-close">
        <Image src="/assets/img/kruis.svg" height={25} width={25} />
      </div>
      <div className="nav__buddygram-battery">{renderBars()}</div>
    </nav>
  );
}
