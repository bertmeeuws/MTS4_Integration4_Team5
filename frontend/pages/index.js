import Head from "next/head";
import Nav from "../components/Layout/Nav";
import styles from "../styles/Home.module.css";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import { useStoreState } from "easy-peasy";

export default function Home() {
  //DIT IS DE HOME PAGINA

  return (
    <>
      <CustomCursor />
      <div className={styles.container}>
        <Head>
          <title>Home - BuddyGram</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/smiley.png" />
        </Head>
        <Nav>
          <main className={styles.main}>
            <h1 className="h1">Home pagina</h1>
          </main>
        </Nav>
      </div>
    </>
  );
}
