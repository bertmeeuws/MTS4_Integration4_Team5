import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "../../constants";

export default function Pop({ setPopup, game }) {
  console.log(game);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [atleastOne, setAtleastOne] = useState(false);

  useEffect(async () => {
    try {
      const response = await axios.get(`${API_URL}/games/${game}`);
      console.log(response.data);

      const data = response.data.students.filter((item) => {
        if (item.private_chat) {
          return item;
        }
      });
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="dashboard__popup__container">
      <div className="dashboard__popup">
        <div
          onClick={(e) => setPopup(false)}
          className="dashboard__popup__exit"
        >
          <Image src="/assets/img/kruis.svg" height={25} width={25} />
        </div>
        <h1 className="title__s-bold">
          Dit is een lijst van alle studenten die u in privé willen spreken.
        </h1>
        <ul className="dashboard__popup__students">
          {data?.map((item, key) => {
            if (item.private_chat) {
              return <li key={key}>{item.name}</li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
}
