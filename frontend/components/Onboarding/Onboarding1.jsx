import React from "react";
import { useStoreActions } from "easy-peasy";
import NavBar from "../NavBar/NavBar";

export default function Onboarding1({ data }) {
  console.log(data);

  const changeRoute = useStoreActions((actions) => actions.changeRoute);
  return (
    <section className="background-yellow stretch-container">
      <NavBar percent={2} />
      <h1 className="h2 margin-top align-center">
        Elke dag kan er wel iets gebeuren
      </h1>
      <p className="p align-center">
        Elke dag krijg je een situatie voorgeschoteld die je op het internet kan
        ervaren.
      </p>
      <button className="button-primary-blue " onClick={(e) => changeRoute(2)}>
        Ontdek hoe je volgers kan krijgen
      </button>
    </section>
  );
}
