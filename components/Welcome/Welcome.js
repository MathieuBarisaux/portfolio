import style from "./Welcome.module.scss";

import Image from "next/image";

// ** Hooks **
import { useState, useEffect } from "react";

// ** Motion **
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Welcome = () => {
  const variantsH1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variantsH2 = {
    hidden: { x: 100, opacity: 0, transition: { duration: 1 } },
    visible: { x: 0, opacity: 1 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={[style.Welcome, "container"].join(" ")}
      ref={ref}
      animate={control}
    >
      <motion.p variants={variantsH1} animate={control} initial="hidden">
        Bienvenue
      </motion.p>
      <motion.p
        variants={variantsH1}
        animate={control}
        transition={{
          duration: 0.8,
          delay: 0.8,
        }}
        initial="hidden"
      >
        Mathieu Barisaux
      </motion.p>
      <motion.p
        variants={variantsH2}
        animate={control}
        transition={{
          duration: 1,
          delay: 1.6,
        }}
        initial="hidden"
      >
        Developpeur fullstack
      </motion.p>

      <div
        className={[style.Welcome__shadow, style.Welcome__shadow__1].join(" ")}
      ></div>
      <div
        className={[style.Welcome__shadow, style.Welcome__shadow__2].join(" ")}
      ></div>
    </motion.div>
  );
};

export default Welcome;
