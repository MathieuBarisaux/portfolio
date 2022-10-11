import style from "./Title.module.scss";

// ** Hooks **
import { useRef, useEffect } from "react";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Title = ({ title, variant, idScroll }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector("#title"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector("#title"),
          start: "0px bottom",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      className={[style.Title, variant === "white" && style.Title__white].join(
        " "
      )}
      ref={ref}
      id={idScroll}
    >
      <div className="container">
        <h1 id={"title"}>{title}</h1>
      </div>
    </div>
  );
};

export default Title;
