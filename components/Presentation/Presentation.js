import style from "./Presentation.module.scss";

// ** Image **
import Image from "next/image";

const Presentation = ({ setUserMenuFocus }) => {
  return (
    <div className={[style.Presentation, "container"].join(" ")}>
      <div className={style.Presentation__content}>
        <div className={style.Presentation__left}>
          <h2>Accompagner votre business, ma priorité</h2>
          <p>
            Ancien manager commercial reconverti en développeur web,
            j’accompagne les entreprises dans leur projets digitaux.
          </p>
          <p>
            Fort de mes expériences passées, j’ai particulièrement le souci de
            la vision clients et business dans le travail que je réalise afin de
            répondre au mieux aux enjeux de marché qui sont les vôtres.
          </p>
        </div>

        <div className={style.Presentation__right}>
          <Image
            src={"/mathieu_barisaux.png"}
            layout={"fill"}
            objectFit={"contain"}
          />

          <div
            className={[
              style.Presentation__shadow,
              style.Presentation__shadow__1,
            ].join(" ")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
