import style from "./Menu.module.scss";

// ** Components **
import Button from "../../Button/Button";

// ** Next **
import Link from "next/link";

import { menuElements } from "../../../asset/menuElements";

const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  const closeMenuOnMobile = () => {
    isOpenMenu !== null ? setIsOpenMenu(false) : null;
  };

  return (
    <nav
      className={[
        style.Menu,
        isOpenMenu && style.Menu__mobile,
        isOpenMenu === false &&
          [style.Menu__mobile, style.Menu__mobile__close].join(" "),
      ].join(" ")}
    >
      {menuElements.map((item, index) => {
        return <a key={index}>{item}</a>;
      })}

      <Link href={"/contact"}>
        <a onClick={closeMenuOnMobile}>
          <Button
            buttonText={"Contact"}
            variant={isOpenMenu !== null && "mobile"}
          />
        </a>
      </Link>
    </nav>
  );
};

export default Menu;
