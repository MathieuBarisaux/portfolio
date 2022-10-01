import Head from "next/head";
import styles from "../styles/Home.module.scss";

// ** Components **
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Welcome from "../components/Welcome/Welcome";
import Presentation from "../components/Presentation/Presentation";

// ** Hooks **
import { useState } from "react";

export default function Home() {
  const [userMenuFocus, setUserMenuFocus] = useState(0);

  return (
    <div className={[styles.Home].join(" ")}>
      <Head>
        <title>Mathieu Barisaux</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Welcome setUserMenuFocus={setUserMenuFocus} />
      <Presentation setUserMenuFocus={setUserMenuFocus} />

      <Menu userMenuFocus={userMenuFocus} />

      <div
        className={[styles.Home__shadow, styles.Home__shadow__1].join(" ")}
      ></div>
      <div
        className={[styles.Home__shadow, styles.Home__shadow__2].join(" ")}
      ></div>
    </div>
  );
}
