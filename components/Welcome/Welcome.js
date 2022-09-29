import style from "./Welcome.module.scss";

// ** Hooks **
import { useEffect } from "react";

// ** Motion **
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Welcome = ({ setUserMenuFocus }) => {
  const variantsH1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const variantsH2 = {
    hidden: { opacity: 0, transition: { duration: 1 } },
    visible: { x: 0, opacity: 1 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  const [hidden, setHidden] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
      setUserMenuFocus(0);
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className={[style.Welcome, "container"].join(" ")}
      animate={control}
      variants={variantsH1}
    >
      <motion.p
        variants={variantsH1}
        animate={control}
        initial="hidden"
        ref={ref}
      >
        Bienvenue
      </motion.p>
      <motion.p
        variants={variantsH1}
        animate={"visible"}
        transition={{
          duration: 0.6,
          delay: 0.6,
        }}
        initial="hidden"
      >
        Mathieu Barisaux
      </motion.p>
      <motion.p
        variants={variantsH2}
        animate={"visible"}
        transition={{
          duration: 0.6,
          delay: 1.2,
        }}
        initial="hidden"
      >
        Developpeur fullstack
      </motion.p>
    </motion.div>
  );
};

export default Welcome;
