import style from "./Footer.module.scss";

// ** Next **
import Image from "next/legacy/image";
import Link from "next/link";

// ** Icons **
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className={[style.Footer, "container"].join(" ")}>
      <div className={style.Footer__top}>
        <div className={style.Footer__brand}>
          <div className={style.Footer__logo}>
            <Image
              src={"/logo.png"}
              layout={"fill"}
              alt={"Logo de Mathieu Barisaux"}
            />
          </div>
          <p>
            Mathieu Barisaux, freelance développeur front-end React &amp;
            Next.js. À Reims ou à distance.
          </p>
        </div>

        <div className={style.Footer__socials}>
          <a
            href="https://www.linkedin.com/in/mathieu-barisaux/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/MathieuBarisaux"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="mailto:contact@mathieu-barisaux.fr"
            aria-label="Email"
          >
            <HiMail />
          </a>
        </div>
      </div>

      <div className={style.Footer__divider} />

      <div className={style.Footer__bottom}>
        <p>© 2026 — Mathieu Barisaux — Siren 915 379 713</p>
        <Link href={"/mentions-legales"}>Mentions légales</Link>
      </div>
    </footer>
  );
};

export default Footer;
