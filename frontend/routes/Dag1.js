import Dag1 from "../components/Dag1/Dag1";
import Dag1_1 from "../components/Dag1/Dag1_1";
import Dag1_2 from "../components/Dag1/Dag1_2";
import Dag1_3 from "../components/Dag1/Dag1_3";
import Dag1_4 from "../components/Dag1/Dag1_4";
import Dag1_5 from "../components/Dag1/Dag1_5";
import Dag1_6 from "../components/Dag1/Dag1_6";
import Dag1_7 from "../components/Dag1/Dag1_7";
import Dag1_8 from "../components/Dag1/Dag1_8";
import Dag1_9 from "../components/Dag1/Dag1_9";
import Dag1_10 from "../components/Dag1/Dag1_10";
import Dag1_11 from "../components/Dag1/Dag1_11";
import Dag1_12 from "../components/Dag1/Dag1_12";
import Dag1_13 from "../components/Dag1/Dag1_13";

import Dag2 from "../components/Dag2/Dag2";
import Dag2_1 from "../components/Dag2/Dag2_1";
import Dag2_2 from "../components/Dag2/Dag2_2";
import Dag2_3 from "../components/Dag2/Dag2_3";
import Dag2_4 from "../components/Dag2/Dag2_4";
import Dag2_5 from "../components/Dag2/Dag2_5";
import Dag2_6 from "../components/Dag2/Dag2_6";
import Dag2_7 from "../components/Dag2/Dag2_7";

import Dag3 from "../components/Dag3/Dag3";
import Dag3_1 from "../components/Dag3/Dag3_1";
import Dag3_2 from "../components/Dag3/Dag3_2";
import Dag3_3 from "../components/Dag3/Dag3_3";
import Dag3_4 from "../components/Dag3/Dag3_4";
import Dag3_5 from "../components/Dag3/Dag3_5";
import Dag3_6 from "../components/Dag3/Dag3_6";

import Dag4 from "../components/Dag4/Dag4";
import Dag4_1 from "../components/Dag4/Dag4_1";
import Dag4_2 from "../components/Dag4/Dag4_2";
import Dag4_3 from "../components/Dag4/Dag4_3";
import Dag4_4 from "../components/Dag4/Dag4_4";
import Dag4_5 from "../components/Dag4/Dag4_5";
import Dag4_6 from "../components/Dag4/Dag4_6";

import Dag5 from "../components/Dag5/Dag5";
import Dag5_1 from "../components/Dag5/Dag5_1";
import Dag5_2 from "../components/Dag5/Dag5_2";
import Dag5_3 from "../components/Dag5/Dag5_3";
import Dag5_4 from "../components/Dag5/Dag5_4";
import Dag5_5 from "../components/Dag5/Dag5_5";
import Dag5_6 from "../components/Dag5/Dag5_6";
import Dag5_7 from "../components/Dag5/Dag5_7";
import Dag5_8 from "../components/Dag5/Dag5_8";

import Reflectie from "../components/Reflectie/Reflectie";

import NavbarWithFollowers from "../components/NavBar/NavBarWithFollowers";

export const Dag1Routes = (game) => {
  return [
    {
      id: 5,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers text={"maandag - 07:30"} />
          <Dag1 data={game[0]} route={5} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 6,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers text={"maandag - 07:35"} />
          <Dag1_1 data={game[0]} route={6} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 7,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers text={"maandag - 07:35"} />
          <Dag1_2 data={game[0]} route={7} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 8,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers text={"maandag - 07:35"} />
          <Dag1_3 data={game[0]} route={8} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 9,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers text={"maandag - 07:35"} />
          <Dag1_4 data={game[0]} route={9} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 10,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"maandag - 07:35"} />
          <Dag1_5 data={game[0]} route={10} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 11,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"maandag - 07:35"} />
          <Dag1_6 data={game[0]} route={11} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 12,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"maandag - 07:35"} />
          <Dag1_7 data={game[0]} route={12} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 13,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"maandag - 07:35"} />
          <Dag1_8 data={game[0]} route={13} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 14,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"maandag - 07:35"} />
          <Dag1_9 data={game[0]} route={14} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 15,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"maandag - 07:35"} />
          <Dag1_10 data={game[0]} route={15} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 16,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"maandag - 07:35"} />
          <Dag1_11 data={game[0]} route={16} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 17,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"maandag - 07:35"} />
          <Dag1_12 data={game[0]} route={17} title={"Dag 1"} />
        </>
      ),
    },
    {
      id: 5,
      name: "Dag 1",
      component: (
        <>
          <NavbarWithFollowers text={"maandag - 07:30"} />
          <Reflectie />
        </>
      ),
    },
  ];
};

export const Dag2Routes = (game) => {
  return [
    {
      id: 19,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:30"} />
          <Dag2 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:35"} />
          <Dag2_1 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:40"} />
          <Dag2_2 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:30"} />
          <Dag2_3 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:30"} />
          <Dag2_4 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:45"} />
          <Dag2_5 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:30"} />
          <Dag2_6 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 5,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:30"} />
          <Reflectie />
        </>
      ),
    },
    /*
    {
      id: 19,
      name: "Dag 2",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"dinsdag - 07:30"} />
          <Dag2_7 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    */
  ];
};

export const Dag3Routes = (game) => {
  return [
    {
      id: 19,
      name: "Dag 3",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"woensdag - 07:30"} />
          <Dag3 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 3",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"woensdag - 07:30"} />
          <Dag3_1 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 3",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"woensdag - 07:30"} />
          <Dag3_2 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 3",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"woensdag - 07:35"} />
          <Dag3_3 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 3",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"woensdag - 07:35"} />
          <Dag3_4 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 3",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"woensdag - 07:40"} />
          <Dag3_5 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 3",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"woensdag - 07:40"} />
          <Dag3_6 data={game[0]} route={15} title={"Dag 2"} />
        </>
      ),
    },
    {
      id: 5,
      name: "Dag 3",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"woensdag - 07:40"} />
          <Reflectie />
        </>
      ),
    },
  ];
};

export const Dag4Routes = (game) => {
  return [
    {
      id: 19,
      name: "Dag 4",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"donderdag - 07:40"} />
          <Dag4 data={game[0]} route={15} title={"Dag 4"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 4",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"donderdag - 07:40"} />
          <Dag4_1 data={game[0]} route={15} title={"Dag 4"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 4",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"donderdag - 07:40"} />
          <Dag4_2 data={game[0]} route={15} title={"Dag 4"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 4",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"donderdag - 07:40"} />
          <Dag4_3 data={game[0]} route={15} title={"Dag 4"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 4",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"donderdag - 07:40"} />
          <Dag4_4 data={game[0]} route={15} title={"Dag 4"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 4",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"donderdag - 07:40"} />
          <Dag4_5 data={game[0]} route={15} title={"Dag 4"} />
        </>
      ),
    },
    {
      id: 5,
      name: "Dag 4",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"donderdag - 07:30"} />
          <Reflectie />
        </>
      ),
    },
    /*
    {
      id: 19,
      name: "Dag 4",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"donderdag - 07:40"} />
          <Dag4_6 data={game[0]} route={15} title={"Dag 4"} />
        </>
      ),
    },
    */
  ];
};

export const Dag5Routes = (game) => {
  return [
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5_1 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5_2 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5_3 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5_4 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5_5 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5_6 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5_7 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 19,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:40"} />
          <Dag5_8 data={game[0]} route={15} title={"Dag 5"} />
        </>
      ),
    },
    {
      id: 5,
      name: "Dag 5",
      component: (
        <>
          <NavbarWithFollowers followers={100} text={"vrijdag - 07:30"} />
          <Reflectie />
        </>
      ),
    },
  ];
};
