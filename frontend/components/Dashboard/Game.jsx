import React, { useEffect, useState } from "react";
import Window from "./Containers/Window";
import axios from "axios";
import { API_URL } from "../../constants";

export default function Game({ teacher, game }) {
  console.log(game);
  const { id } = teacher;

  //const date = new Date(game[0]?.published_at);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await axios.get(`${API_URL}/games?id=${game}`);
    if (response?.data) {
      setData(response?.data[0]);
      console.log(response.data);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <section className="dashboard-newgame">
      <p className="dashboard-newgame-welcome p blue bold">Aangemaakt spel</p>
      <h1 className="h2">
        {data.name} - {new Date(data.published_at).toLocaleDateString("be-nl")}
      </h1>
      <p>Klik hier om de leerlingen te zien die in privé willen praten</p>
      <p className="dashboard-game-subtitle pixelated-font">statistieken</p>
      <div className="dashboard-game-circle-containers">
        <div className="dashboard-game-circle">
          <p className="pixelated-font h2">350</p>
          <p className="p-small">Gem. volgers</p>
        </div>
        <div className="dashboard-game-circle">
          <p className="pixelated-font h2">{data.students.length}</p>
          <p className="p-small">Studenten</p>
        </div>
      </div>
      <p className="dashboard-game-subtitle pixelated-font">topscores</p>
      <div className="dashboard-game-scores">
        <Window>
          <p className="pixelated-font">Leerlingen met de meeste volgers</p>
          <div className="student-row">
            <p>Dani Amritage</p>
            <p className="pixelated-font">0</p>
          </div>
          <div className="student-row">
            <p>Dani Amritage</p>
            <p className="pixelated-font">0</p>
          </div>
          <div className="student-row">
            <p>Dani Amritage</p>
            <p className="pixelated-font">0</p>
          </div>
        </Window>
        <Window>
          <p className="pixelated-font">Leerlingen met de minste volgers</p>
          <div className="student-row">
            <p>Dani Amritage</p>
            <p className="pixelated-font">0</p>
          </div>
          <div className="student-row">
            <p>Dani Amritage</p>
            <p className="pixelated-font">0</p>
          </div>
          <div className="student-row">
            <p>Dani Amritage</p>
            <p className="pixelated-font">0</p>
          </div>
        </Window>
      </div>
    </section>
  );
}
