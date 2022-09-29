import styles from "./Menu.module.scss";

// ** Data **
import { menuElements } from "../../asset/menuElements";

const Menu = ({ userMenuFocus }) => {
  return (
    <nav className={[styles.Menu, "container"].join(" ")}>
      <div className={styles.Menu__wrapper}>
        {menuElements.map((item, index) => {
          return (
            <a
              key={index}
              className={[
                styles.Menu__link,
                userMenuFocus === index && styles.Menu__focus,
              ].join(" ")}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Menu;
