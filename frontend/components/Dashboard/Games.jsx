import React from "react";
import Window from "./Containers/Window";

export default function Games() {
  return (
    <section className="dashboard-newgame">
      <p className="dashboard-newgame-welcome p blue bold">Alle</p>
      <h1 className="h2">Aangemaakte spellen</h1>
      <Window text="http://localhost:3000/game/1">
        <p>2HAc - 24/05/21</p>
        <p>25 Leerlingen</p>
        <p>354 gem. volgers</p>
        <p className="button-primary-blue p-small">statistieken</p>
        <p className="button-primary-blue p-small">wijzig leerlingen</p>
      </Window>
      <Window text="http://localhost:3000/game/1">
        <p>2HAc - 24/05/21</p>
        <p>25 Leerlingen</p>
        <p>354 gem. volgers</p>
        <p className="button-primary-blue p-small">statistieken</p>
        <p className="button-primary-blue p-small">wijzig leerlingen</p>
      </Window>
    </section>
  );
}
