import style from "./Title.module.scss";

// ** Hooks **
import { useRef, useEffect } from "react";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Title = ({ title, variant }) => {
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
          start: "top bottom",
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
      id={"titleDiv"}
      ref={ref}
    >
      <div className="container">
        <h1 id={"title"}>{title}</h1>
      </div>
    </div>
  );
};

export default Title;
