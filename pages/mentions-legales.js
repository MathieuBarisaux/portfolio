import style from "../styles/mentions-legales.module.scss";

// ** Components **
import Header from "../components/headerComponents/Header/Header";
import Footer from "../components/Footer/Footer";

// ** Next **
import Head from "next/head";

export default function MentionLegales() {
  return (
    <div className={style.Legales}>
      <Head>
        <title>Mentions légales — Mathieu Barisaux</title>
        <meta
          name="description"
          content="Mentions légales du site mathieu-barisaux.fr : responsable de publication, hébergement, contact et informations légales."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Mathieu Barisaux" />
        <meta name="robots" content="noindex, follow" />

        <link
          rel="canonical"
          href="https://www.mathieu-barisaux.fr/mentions-legales"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:url"
          content="https://www.mathieu-barisaux.fr/mentions-legales"
        />
        <meta
          property="og:title"
          content="Mentions légales — Mathieu Barisaux"
        />
        <meta
          property="og:description"
          content="Mentions légales du site mathieu-barisaux.fr."
        />
        <meta
          property="og:image"
          content="https://www.mathieu-barisaux.fr/og-image.png"
        />
      </Head>

      <Header variant={"full"} />

      <main className={["container", style.Legales].join(" ")}>
        <h1>Mentions légales</h1>
        <p>
          L&apos;ensemble de ce site est soumis à la réglementation française et
          communautaire. Les informations qui figurent sur ce site n&apos;ont
          aucun caractère contractuel et ne sauraient engager la responsabilité
          de Mathieu Barisaux qui reste libre, à tout moment, d&apos;enrichir,
          modifier, corriger ou supprimer tout ou partie du contenu et des
          présentations des pages de son site.
        </p>
        <h3>Responsable de publication</h3>
        <p>
          Contenu du site édité par : <strong>Mathieu Barisaux</strong>
          <br />
          Freelance développeur front-end spécialisé React, à Reims et en
          remote.
        </p>
        <p>SIRET : 915 379 713 000 18</p>
        <p>
          Le site a été créé par :{" "}
          <a
            href="https://www.linkedin.com/in/mathieu-barisaux/"
            rel="noreferrer"
            target={"_blank"}
          >
            <strong>Mathieu Barisaux</strong>
          </a>
        </p>
        <h3>Contact</h3>
        <p>
          Adresse e-mail :{" "}
          <a href="mailto:contact@mathieu-barisaux.fr">
            contact@mathieu-barisaux.fr
          </a>
          <br />
          Télephone : 07 63 32 61 93
        </p>
        <h3>Hébergement</h3>
        <p>
          L&apos;hébergeur du site www.mathieu-barisaux.fr est la Société
          Netlify, dont le siège social est situé au 2325 3rd Street, Suite 296,
          San Francisco, California 94107.
        </p>
        <p>
          Site web :{" "}
          <a href="https://www.netlify.com" rel="noreferrer" target={"_blank"}>
            https://www.netlify.com
          </a>
        </p>
        Contact : <a href="mailto:support@netlify.com">support@netlify.com</a>
      </main>

      <Footer />
    </div>
  );
}
