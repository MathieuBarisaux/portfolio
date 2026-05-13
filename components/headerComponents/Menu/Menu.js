import style from "./Menu.module.scss";

// ** Components **
import Button from "../../Button/Button";

// ** Next **
import Link from "next/link";

// ** Icons **
import { HiArrowRight, HiMail, HiPhone } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import { menuElements } from "../../../asset/menuElements";

const allItems = [...menuElements, { title: "Contact", id: "contact" }];

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  const isOpen = isOpenMenu === true;

  const closeMenuOnMobile = () => {
    if (isOpenMenu !== null) setIsOpenMenu(false);
  };

  return (
    <nav
      id="primary-navigation"
      className={[style.Menu, isOpen && style.Menu__open].join(" ")}
      aria-hidden={isOpenMenu === false ? "true" : undefined}
    >
      {/* Desktop nav */}
      <div className={style.Menu__desktop}>
        {menuElements.map((item, index) => (
          <Link href={`/#${item.id}`} key={index}>
            <span>{item.title}</span>
          </Link>
        ))}
        <a href={"/#contact"}>
          <Button buttonText={"Contact"} />
        </a>
      </div>

      {/* Mobile nav */}
      <div className={style.Menu__mobile}>
        <span className={style.Menu__kicker}>Navigation</span>

        <ul className={style.Menu__list}>
          {allItems.map((item, index) => (
            <li key={item.id} style={{ "--i": index }}>
              <Link href={`/#${item.id}`} onClick={closeMenuOnMobile}>
                <span className={style.Menu__index}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={style.Menu__label}>{item.title}</span>
                <HiArrowRight className={style.Menu__arrow} />
              </Link>
            </li>
          ))}
        </ul>

        <div className={style.Menu__divider} />

        <div className={style.Menu__contact}>
          <a href="mailto:contact@mathieu-barisaux.fr">
            <HiMail /> contact@mathieu-barisaux.fr
          </a>
          <a href="tel:+33763326193">
            <HiPhone /> 07 63 32 61 93
          </a>
        </div>

        <div className={style.Menu__socials}>
          <a
            href="https://www.linkedin.com/in/mathieu-barisaux/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/MathieuBarisaux"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
