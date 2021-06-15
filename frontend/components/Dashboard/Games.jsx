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
  }, []);

  return (
    <section className="dashboard-newgame">
      <p className="dashboard-newgame-welcome p blue bold">Alle</p>
      <h1 className="h2">Aangemaakte spellen</h1>
      {loading ? <p>Loading</p> : ""}
      <div className="overflow-y">
        {games.map((game) => {
          return (
            <Window key={game.link} text={`${WEBSITE_URL}/game/${game.link}`}>
              <div className="games-flex">
                <div>
                  <p className="bold">{game.name} - DATE HERE</p>
                  <p>{game.students.length} Leerlingen</p>
                  <p>NUMBER gem. volgers</p>
                </div>
                <div>
                  <p
                    className="button-primary-blue p-small"
                    onClick={(e) => {
                      setGame(game.id);
                      setId(2);
                    }}
                  >
                    statistieken
                  </p>
                  <p
                    onClick={(e) => {
                      setGame(game.id);
                      setId(3);
                    }}
                    style={{ marginTop: "2.5rem" }}
                    className="button-primary-blue p-small"
                  >
                    wijzig leerlingen
                  </p>
                </div>
              </div>
            </Window>
          );
        })}
      </div>
    </section>
  );
}
