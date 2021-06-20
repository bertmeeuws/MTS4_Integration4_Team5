import React, { useState, useEffect } from "react";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import axios from "axios";
import ProfilePictureForm from "../../components/Forms/ProfilePictureForm";
import Head from "next/head";
import DragAndDrop from "../../components/Interactive/DragAndDrop";
import { useStoreState, useStoreActions } from "easy-peasy";
import CustomCursor from "../../components/CustomCursor/CustomCursor";

import {
  Dag1Routes,
  Dag2Routes,
  Dag3Routes,
  Dag4Routes,
  Dag5Routes,
} from "../../routes/Dag1";

import Introduction from "../../components/Introduction/Introduction";

import Onboarding1 from "../../components/Onboarding/Onboarding1";
import Onboarding2 from "../../components/Onboarding/Onboarding2";
import Onboarding3 from "../../components/Onboarding/Onboarding3";
import Onboarding4 from "../../components/Onboarding/Onboarding4";

import NavbarWithFollowers from "../../components/NavBar/NavBarWithFollowers";

import { API_URL } from "../../constants";

export default function Index({ data, ctx, succes, id }) {
  const routeId = useStoreState((state) => state.route);

  const setGameData = useStoreActions((actions) => actions.setGameData);

  useEffect(() => {
    setGameData(data);
  }, []);

  console.log(routeId);

  //Routes bepaald welke componenten er geladen worden

  const routes = [
    {
      id: 0,
      name: "Introductie",
      component: <Introduction data={data} title={"Introductie"} />,
    },
    {
      id: 1,
      name: "Stap 1",
      component: <Onboarding1 title={"Stap 1"} />,
    },
    {
      id: 2,
      name: "Stap 2",
      component: <Onboarding2 title={"Stap 2"} />,
    },
    {
      id: 3,
      name: "Stap 3",
      component: <Onboarding3 title={"Stap 3"} />,
    },
    {
      id: 4,
      name: "Stap 4",
      component: <Onboarding4 title={"Stap 4"} />,
    },
    ...Dag1Routes(data),
    ...Dag2Routes(data),
    ...Dag3Routes(data),
    ...Dag4Routes(data),
    ...Dag5Routes(data),
  ];

  return (
    <>
      <Head>
        <title>{routes[routeId].name} - BuddyGram</title>
        <link rel="icon" href="/smiley.png" />
      </Head>
      <CustomCursor />
      {routes[routeId].component}
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  //Code that checks if game actually exists

  const response = await axios.get(`${API_URL}/games/?link=${id}`);

  if (response?.data?.length === 1) {
    console.log("Found a game");

    return {
      props: {
        success: true,
        id: id,
        data: response.data,
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
