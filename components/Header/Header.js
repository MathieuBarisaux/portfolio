import styles from "./Header.module.scss";

// ** Next **
import Image from "next/image";

import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={[styles.Header, "container"].join(" ")}>
      <div className={styles.Header__logo}>
        <Image priority src="/logo.png" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Header;
