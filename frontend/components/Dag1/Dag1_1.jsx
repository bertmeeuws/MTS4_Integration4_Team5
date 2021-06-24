import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { API_URL } from "../../constants/index";
import ListWindow from "../ListWindow/ListWindow";
import axios from "axios";

export default function Dag1_1() {
  const nextRoute = useStoreActions((actions) => actions.nextRoute);

  const user = useStoreState((state) => state.current_gamer);
  const setImage = useStoreActions((actions) => actions.setProfileImage);

  console.log(user);

  const [state, setState] = useState(null);
  const [devices, setDevices] = React.useState([]);
  const [error, setError] = useState(false);
  const [blob, setBlob] = useState(null);

  const uploadImage = async (e) => {
    e.preventDefault();
    if (!blob) {
      alert("Upload een foto");
      setError(true);
    } else {
      setError(false);
      console.log(blob);
      let formData = new FormData(e.target);
      formData.append("ref", "image");
      formData.append("field", "image");
      formData.append("files", blob);

      try {
        const postImageResponse = await axios.post(`${API_URL}/images`);
        // creating an image content-type seems a good solution
        const newImageId = postImageResponse.data.id;
        formData.append("refId", newImageId);
        const uploadHeaders = { "Content-Type": "multippart/form-data" };
        axios.post(`${API_URL}/upload`, formData, {
          headers: uploadHeaders,
        });

        try {
          console.log("Updating student");
          const response = await axios.put(`${API_URL}/students/${user.id}`, {
            image: newImageId,
          });
          console.log(response);
          setImage(state);
          nextRoute();
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (

    <section className="day__middle-center">

        <form className="game__uploadimage" onSubmit={uploadImage}>

            <div className="uploadimage__top">
              {state && (
                <button
                  className="button__cancel"
                  onClick={(event) => {
                    setState(null);
                    setBlob(null);
                  }}
                >verwijder</button>
              )}
            </div>

            <div className="game__picture-container">
              <p className="game__text-back title__s-bold">upload een foto met het knopje hier onder <br></br><br></br>
              {error ? <span className="title__s-bold text__red">nog geen foto upgeload!</span> : ""}</p>
              <img
                className="game__picture"
                id="output"
                width="100%"
                height="100%"
                src={state} />
            </div>

            <div className="uploadimage__bottom">
              <input
              type="file"
              className="custom-file-input"
              id="input"
              accept="image/*"
              onChange={(event) => {
                setState(URL.createObjectURL(event.target.files[0]));
                setBlob(event.target.files[0]);
              }}
              value=""
              />

              <input
                className="button__primary"
                type="submit"
                value="foto gebruiken"
              />
            </div>

        </form>
    </section>
    
  );
}
