import styles from "./Button.module.scss";

import { TbLoader } from "react-icons/tb";

const Button = ({ buttonText, variant, isLoading, onclick }) => {
  let buttonColor;

  switch (variant) {
    case "back": {
      buttonColor = styles.Button__back;
      break;
    }
    case "mobile": {
      buttonColor = [styles.Button__mobile, styles.Button__noBack].join(" ");
      break;
    }
    default: {
      buttonColor = styles.Button__noBack;
    }
  }

  return (
    <div
      className={[styles.Button, buttonColor].join(" ")}
      onClick={() => {
        onclick && isLoading !== true ? onclick() : null;
      }}
    >
      {isLoading ? <TbLoader /> : <p>{buttonText}</p>}
    </div>
  );
};

export default Button;
