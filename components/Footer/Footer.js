import style from "./Footer.module.scss";

// ** Next **
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={[style.Footer, "container"].join(" ")}>
      <div className={style.Footer__logo}>
        <Image src={"/logo.png"} layout={"fill"} alt={"Logo de  Mathieu Barisaux"} />
      </div>

      <p>Mathieu Barisaux, freelance développeur front-end spécialisé React à Reims ou à distance.</p>

      <div>
        <p>© 2025 - All Rigth reserved - Mathieu Barisaux - Siren : 915 379 713</p>
        <Link href={"/mentions-legales"}>Mentions légales</Link>
      </div>

      {/* <h6>
        Stack utilisée pour ce site :{" "}
        <a href="https://nextjs.org/" target={"_blank"} rel="noreferrer">
          Next.js
        </a>
        ,{" "}
        <a href="https://sass-lang.com/" target={"_blank"} rel="noreferrer">
          SCSS
        </a>
        ,{" "}
        <a
          href="https://greensock.com/gsap/"
          target={"_blank"}
          rel="noreferrer"
        >
          GSAP
        </a>{" "}
        &{" "}
        <a
          href="https://www.npmjs.com/package/react-lottie"
          target={"_blank"}
          rel="noreferrer"
        >
          React-lottie
        </a>
        .
      </h6> */}
    </div>
  );
};

export default Footer;
