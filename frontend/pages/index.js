import Head from "next/head";
import Nav from "../components/Layout/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - BuddyGram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav>
        <main className={styles.main}>
          <h1 className="h1">Home pagina</h1>
        </main>
      </Nav>
    </div>
  );
}
