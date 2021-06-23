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

    <div className="nav__buddygram-introduction">
      
      <p className="title__s-bold">BuddyGram</p>

      <div className="nav__buddygram-close">
        <Image src="/assets/img/kruis.svg" height={25} width={25} />
      </div>

      <div className="nav__buddygram-battery">{renderBars()}</div>

    </div>
  );
}
