import style from "./Presentation.module.scss";

// ** Hooks **
import { useState, useEffect } from "react";

// ** Motion **
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ** Image **
import Image from "next/image";

const Presentation = ({ setUserMenuFocus }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variantsLeft = {
    hidden: { opacity: 0, x: -100, transition: { duration: 1 } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const variantsRight = {
    hidden: { opacity: 0, x: 100, transition: { duration: 1 } },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
      setUserMenuFocus(1);
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className={[style.Presentation, "container"].join(" ")}>
      <div className={style.Presentation__content}>
        <motion.div
          className={style.Presentation__left}
          variants={variantsLeft}
          animate={control}
          initial="hidden"
        >
          <h2>Accompagner votre business, ma priorité</h2>
          <p>
            Ancien manager commercial reconverti en développeur web,
            j’accompagne les entreprises dans leur projets digitaux.
          </p>
          <p></p>
          <p>
            Fort de mes expériences passées, j’ai particulièrement le souci de
            la vision clients et business dans le travail que je réalise afin de
            répondre au mieux aux enjeux de marché qui sont les vôtres.
          </p>
          <p ref={ref}></p>
        </motion.div>

        <motion.div
          className={style.Presentation__right}
          variants={variantsRight}
          animate={control}
          initial="hidden"
        >
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

          {/* <div
            className={[
              style.Presentation__bar,
              style.Presentation__bar_1,
            ].join(" ")}
          ></div>
          <div
            className={[
              style.Presentation__bar,
              style.Presentation__bar_2,
            ].join(" ")}
          ></div>
          <div
            className={[
              style.Presentation__bar,
              style.Presentation__bar_3,
            ].join(" ")}
          ></div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Presentation;
