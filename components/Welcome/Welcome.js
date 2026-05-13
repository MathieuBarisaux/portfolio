import style from "./Welcome.module.scss";

// ** Hooks **
import { useRef, useEffect } from "react";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Welcome = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector("#title"),
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector("#welcome"),
          start: "top top",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#bam"),
      { opacity: 1, x: 0 },
      {
        opacity: 0,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector("#welcome"),
          start: "0px top",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      className={[style.Welcome, "container"].join(" ")}
      id={"welcome"}
      ref={ref}
    >
      <span className={style.Welcome__badge}>
        <span className={style.Welcome__dot} aria-hidden="true" />
        Disponible pour vos projets
      </span>
      <p className={style.Welcome__name}>Mathieu Barisaux</p>
      <h1 id={"title"} className={style.Welcome__title}>
        Freelance front-end <span>React &amp; Next.js</span>
      </h1>
      <p id={"bam"} className={style.Welcome__lead}>
        Je conçois et développe des sites vitrines, des SaaS et des
        applications web sur-mesure pour les entreprises. À Reims ou à
        distance.
      </p>
    </div>
  );
};

export default Welcome;
