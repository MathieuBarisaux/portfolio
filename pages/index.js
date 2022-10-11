import Head from "next/head";
import styles from "../styles/Home.module.scss";

// ** Components **
import Header from "../components/headerComponents/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import Title from "../components/Title/Title";
import Presentation from "../components/Presentation/Presentation";
import Offers from "../components/Offers/Offer";
import Realisations from "../components/Realisations/Realisations";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

// ** Hooks **
import { useRef, useEffect } from "react";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const refHome = useRef(null);

  useEffect(() => {
    const element = refHome.current;

    gsap.fromTo(
      element.querySelector("#header"),
      {
        opacity: 1,
        x: 0,
      },
      {
        opacity: 1,
        height: 70,
        backgroundColor: "rgb(1,1,0)",
        scrollTrigger: {
          trigger: element.querySelector("#header"),
          start: "top -50",
          end: 99999,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className={[styles.Home].join(" ")} ref={refHome}>
      <Head>
        <title>
          Mathieu Barisaux - Freelance développeur front-end spécialisé React à
          Reims et en remote.
        </title>
        <meta
          name="description"
          content="Mathieu Barisaux, freelance développeur front-end spécialisé React à Reims et en remote."
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />

      <Welcome />

      <Title
        title={"Accompagner votre business, ma priorité."}
        idScroll={"expertise"}
      />

      <Presentation />

      <Title title={"Mes services."} idScroll={"services"} />

      <Offers />

      <Title title={"Quelques réalisations..."} idScroll={"realisations"} />

      <Realisations />

      <Contact />

      <Footer />

      <div
        className={[styles.Home__shadow, styles.Home__shadow__1].join(" ")}
      ></div>
    </div>
  );
}
