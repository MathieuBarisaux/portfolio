import style from "./Header.module.scss";

// ** Components **
import Menu from "../Menu/Menu";
import CheckboxMenu from "../CheckboxMenu/CheckboxMenu";

// ** Hooks **
import { useEffect, useState, useRef } from "react";

// ** Next **
import Link from "next/link";
import Image from "next/image";

const Header = ({ variant }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(null);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpenMenu]);

  return (
    <div className={[style.Header, variant === "full" && style.Header__full].join(" ")} id={"header"}>
      <div className="container">
        <Link href={"/"}>
          <div className={style.Header__logo}>
            <Image src={"/logo.png"} layout={"fill"} alt={"Logo de Mathieu Barisaux"} priority />
          </div>
        </Link>

        <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

        <CheckboxMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      </div>
    </div>
  );
};

export default Header;
