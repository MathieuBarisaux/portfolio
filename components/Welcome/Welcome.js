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
      {
        opacity: 1,
        x: 0,
      },
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
      {
        opacity: 1,
        x: 0,
      },
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
      <p>Mathieu Barisaux</p>
      <p id={"title"}>Freelance développeur front-end</p>
      <p id={"bam"}>
        J&apos;accompagne les entreprises et les particuliers dans leurs projets
        d&apos;application web, de blog, de site vitrine ou de landing page. À
        Reims ou à distance.
      </p>
    </div>
  );
};

export default Welcome;
