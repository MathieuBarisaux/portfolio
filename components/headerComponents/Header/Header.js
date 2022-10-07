import style from "./Header.module.scss";

// ** Components **
import Menu from "../Menu/Menu";
import CheckboxMenu from "../CheckboxMenu/CheckboxMenu";

// ** Hooks **
import { useEffect, useState, useRef } from "react";

// ** Next **
import Link from "next/link";
import Image from "next/image";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(null);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isOpenMenu]);

  return (
    <div className={["container", style.Header].join(" ")} id={"header"}>
      <Link href={"/"}>
        <a>
          <div className={style.Header__logo}>
            <Image src={"/logo.png"} layout={"fill"} />
          </div>
        </a>
      </Link>

      <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

      <CheckboxMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </div>
  );
};

export default Header;
