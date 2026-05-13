import Head from "next/head";
import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";

// ** Components **
import Header from "../components/headerComponents/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import Title from "../components/Title/Title";
// Import dynamique avec SSR désactivé pour éviter l'erreur "document is not defined"
const Presentation = dynamic(() => import("../components/Presentation/Presentation"), { ssr: false });
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
        backgroundColor: "rgba(8, 4, 20, 0.65)",
        borderBottomColor: "rgba(255, 255, 255, 0.06)",
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
          Mathieu Barisaux — Freelance Développeur React & Next.js à Reims
        </title>
        <meta
          name="description"
          content="Freelance front-end React & Next.js à Reims et à distance. Je conçois sites vitrines, SaaS et applications web sur-mesure pour les entreprises. Discutons de votre projet."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mathieu Barisaux" />
        <meta
          name="keywords"
          content="freelance, développeur front-end, React, Next.js, Reims, site vitrine, SaaS, application web"
        />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.mathieu-barisaux.fr/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:url" content="https://www.mathieu-barisaux.fr/" />
        <meta
          property="og:title"
          content="Mathieu Barisaux — Freelance Développeur React & Next.js à Reims"
        />
        <meta
          property="og:description"
          content="Freelance front-end React & Next.js à Reims et à distance. Sites vitrines, SaaS et applications web sur-mesure pour les entreprises."
        />
        <meta
          property="og:image"
          content="https://www.mathieu-barisaux.fr/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Mathieu Barisaux, freelance développeur front-end React & Next.js à Reims"
        />
        <meta
          property="og:site_name"
          content="Mathieu Barisaux — Portfolio"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mathieu Barisaux — Freelance Développeur React & Next.js à Reims"
        />
        <meta
          name="twitter:description"
          content="Freelance front-end React & Next.js à Reims et à distance. Sites vitrines, SaaS et applications web sur-mesure."
        />
        <meta
          name="twitter:image"
          content="https://www.mathieu-barisaux.fr/og-image.png"
        />

        {/* JSON-LD : Person + ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.mathieu-barisaux.fr/#mathieu",
                  name: "Mathieu Barisaux",
                  jobTitle:
                    "Freelance développeur front-end React & Next.js",
                  url: "https://www.mathieu-barisaux.fr/",
                  image:
                    "https://www.mathieu-barisaux.fr/mathieu_barisaux-min.png",
                  email: "contact@mathieu-barisaux.fr",
                  telephone: "+33763326193",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Reims",
                    addressRegion: "Grand Est",
                    addressCountry: "FR",
                  },
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Front-end",
                    "SaaS",
                    "Site vitrine",
                    "Application web",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/mathieu-barisaux/",
                    "https://github.com/MathieuBarisaux",
                  ],
                },
                {
                  "@type": "ProfessionalService",
                  "@id":
                    "https://www.mathieu-barisaux.fr/#service",
                  name: "Mathieu Barisaux — Développement front-end freelance",
                  url: "https://www.mathieu-barisaux.fr/",
                  provider: {
                    "@id": "https://www.mathieu-barisaux.fr/#mathieu",
                  },
                  areaServed: [
                    { "@type": "City", name: "Reims" },
                    { "@type": "Country", name: "France" },
                  ],
                  serviceType: [
                    "Développement de site vitrine",
                    "Développement d'application SaaS",
                    "Développement d'application web sur-mesure",
                  ],
                  priceRange: "€€",
                },
              ],
            }),
          }}
        />
      </Head>

      <Header />

      <Welcome />

      <Title
        kicker="Expertise"
        title={"Accompagner votre business, ma priorité."}
        idScroll={"expertise"}
      />

      <Presentation />

      <Title kicker="Services" title={"Mes services."} idScroll={"services"} />

      <Offers />

      <Title
        kicker="Portfolio"
        title={"Réalisations récentes."}
        idScroll={"realisations"}
      />

      <Realisations />

      <Contact />

      <Footer />

      <div className={[styles.Home__shadow, styles.Home__shadow__1].join(" ")}></div>
    </div>
  );
}
