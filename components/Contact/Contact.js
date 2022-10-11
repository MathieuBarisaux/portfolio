import style from "./Contact.module.scss";

// ** Hooks **
import { useState } from "react";

// ** Icons **
import { HiMail, HiPhone } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

// ** Components **
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";

// ** Next **
import Image from "next/image";

// ** Function **
import submitContactForm from "../../functions/model/submitContactForm/submitContactForm";

const Contact = () => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isUserConditionsChecked, setIsUserConditionsChecked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [globalError, setGlobalError] = useState("");
  const [isSendValidate, setIsSendValidate] = useState(false);

  return (
    <div className={style.Contact}>
      <div
        className={[style.Contact__title, "container"].join(" ")}
        id={"contact"}
      >
        <h1>Contact.</h1>
      </div>

      <div className={[style.Contact__card, "container"].join(" ")}>
        <div className={style.Contact__infos}>
          <div className={style.Contact__img}>
            <Image
              src={"/mathieu_barisaux-min.png"}
              layout={"fill"}
              objectFit={"cover"}
              className={style.Contact__picture}
              alt={
                "Mathieu Barisaux, developpeur front-end, à Reims et en remote."
              }
            />
          </div>

          <h3>Mathieu Barisaux</h3>
          <h4>Developpeur front-end</h4>

          <div className={style.Contact__infos__line}>
            <HiPhone />
            <p>07 63 32 61 93</p>
          </div>

          <div className={style.Contact__infos__line}>
            <HiMail />
            <a href="mailto:contact@mathieu-barisaux.fr">
              contact@mathieu-barisaux.fr
            </a>
          </div>

          <div className={style.Contact__infos__links}>
            <a
              href="https://www.linkedin.com/in/mathieu-barisaux/"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={style.Contact__infos__link}>
                <FaLinkedinIn />
              </div>
            </a>

            <a
              href="https://github.com/MathieuBarisaux"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={style.Contact__infos__link}>
                <FiGithub />
              </div>
            </a>
          </div>
        </div>

        <form className={style.Contact__form}>
          <h2>Et si on discutait de votre projet ?</h2>

          <InputBox
            placeholder={"Votre prénom"}
            input={userFirstName}
            setInput={setUserFirstName}
          />
          <InputBox
            placeholder={"Votre nom"}
            input={userLastName}
            setInput={setUserLastName}
          />
          <InputBox
            placeholder={"Votre adresse email"}
            input={userMail}
            setInput={setUserMail}
          />
          <InputBox
            placeholder={"Votre message"}
            type={"textarea"}
            input={userMessage}
            setInput={setUserMessage}
          />

          <InputBox
            type={"checkbox"}
            label={
              "En soumettant ce formulaire, vous acceptez que ces informations soit utilisées pour que je puisse vous répondre. 😉"
            }
            input={isUserConditionsChecked}
            setInput={setIsUserConditionsChecked}
          />

          {isSendValidate ? (
            <>
              <p>
                Merci pour votre message, celui-ci a été envoyé avec succès. ✓
              </p>
              <p>Je reviens vers vous dès que possible.</p>
            </>
          ) : (
            <div className={style.Contact__form__management}>
              <p>{globalError}</p>
              <Button
                buttonText={"Envoyer votre message"}
                variant={"back"}
                isLoading={isLoading}
                onclick={() =>
                  submitContactForm(
                    userFirstName,
                    setUserFirstName,
                    userLastName,
                    setUserLastName,
                    userMail,
                    setUserMail,
                    userMessage,
                    setUserMessage,
                    isUserConditionsChecked,
                    setIsUserConditionsChecked,
                    setGlobalError,
                    setIsLoading,
                    setIsSendValidate
                  )
                }
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
