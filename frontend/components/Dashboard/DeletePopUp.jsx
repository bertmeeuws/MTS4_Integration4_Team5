import React from "react";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "../../constants";

export default function DeletePopUp({ selectedGame, setDeletePopup }) {
  const { id } = selectedGame;

  console.log(selectedGame);

  console.log(id);

  const handleSubmitForm = async () => {
    try {
      const response = await axios.delete(`${API_URL}/games/${id}`);
      setDeletePopup(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="dashboard__popup__container">
      <div style={{ height: "40rem" }} className="dashboard__popup">
        <div
          onClick={(e) => {
            setDeletePopup(false);
          }}
          className="dashboard__popup__exit"
        >
          <Image src="/assets/img/kruis.svg" height={25} width={25} />
        </div>
        <h1
          style={{ marginBottom: "2rem" }}
          className="title__m-bold text-center"
        >
          Ben je zeker dat je deze game wilt verwijderen?
        </h1>
        <div style={{ margin: "0 auto" }}>
          <button
            onClick={(e) => handleSubmitForm()}
            className="button__primary"
          >
            Ja
          </button>
          <button
            style={{ marginLeft: "2rem" }}
            onClick={(e) => {
              setDeletePopup(false);
            }}
            className="button__secondary"
          >
            Nee
          </button>
        </div>
      </div>
    </div>
  );
}
