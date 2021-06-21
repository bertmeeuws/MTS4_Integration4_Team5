import axios from "axios";
import React, { useEffect, useState } from "react";
import Window from "./Containers/Window";
import { API_URL, WEBSITE_URL } from "../../constants";

export default function Games({ teacher, setId, setGame }) {
  const { id } = teacher;

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await axios.get(
      `${API_URL}/games?_where[teacher]=${id}&_sort=created_at:DESC`
    );
    setLoading(false);
    setGames(response.data);
    console.log(response.data);
    console.log(response.data[0].id);
  }, []);

  return (
    <section className="dashboard__wrapper">
      <span className="text__m-bold text__blue">Welkom, {teacher.surname}</span>
      <h1 className="title__m-bold">overzicht spellen</h1>
      {loading ? <p>Loading</p> : ""}

      <div className="games__wrapper">
        <div className="newgame__container">
          <span className="title__s-bold">Maak een nieuw spel aan.</span>
          <div className="spacer__s"></div>
          <p className="text__m-normal">
            Voeg al je leerlingen toe aan een spel en genereer een unieke
            deelbare link.
          </p>
          <div className="spacer__s"></div>
          <a onClick={(e) => setId(0)} className="button__primary">
            maak nieuw spel aan
          </a>
        </div>

        <div className="games__list">
          {games.map((game) => {
            const date = new Date(game.published_at);

            return (
              <Window key={game.link} text={`${WEBSITE_URL}/game/${game.link}`}>
                <div>
                  <p className="bold">
                    {" "}
                    {game.name} - {date.toLocaleDateString("be-nl")}
                  </p>
                  <p>{game.students.length} Leerlingen</p>
                </div>

                <a
                  className="button__primary"
                  onClick={(e) => {
                    setGame(game.id);
                    setId(2);
                  }}
                >
                  statistieken
                </a>
              </Window>
            );
          })}
        </div>
      </div>
    </section>
  );
}
