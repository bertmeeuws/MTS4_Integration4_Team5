import React, { useState } from "react";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import axios from "axios";
import ProfilePictureForm from "../../components/Forms/ProfilePictureForm";
import Introduction from "../../components/Introduction/Introduction";

export default function Index({ data, ctx, succes, id }) {
  console.log(id);

  const [route, setRoute] = useState(0);

  //Routes bepaald welke componenten er geladen worden
  const routes = [
    {
      id: 0,
      action: "Star van het spel",
      percent: 0,
      component: <Introduction setRoute={setRoute} />,
    },
    {
      id: 1,
      action: "Foto uploaden",
      percent: 30,
      component: <ProfilePictureForm setRoute={setRoute} />,
    },
  ];

  return (
    <section className="exercise-form-start">
      {routes[route].component}
      <LoadingBar
        action={routes[route].action}
        percent={routes[route].percent}
      />
    </section>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  //Code that checks if game actually exists

  const response = await axios.get(
    `http://localhost:1337/links/?link_id=${id}`
  );
  console.log(response.data);
  if (response?.data?.length === 1) {
    console.log("Found a game");
    return {
      props: {
        success: true,
        id: id,
      },
    };
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
