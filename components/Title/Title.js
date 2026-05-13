import style from "./Title.module.scss";

// ** Hooks **
import { useRef, useEffect } from "react";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Title = ({ title, variant, idScroll, kicker }) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector("#title"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
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
    <section
      className={[style.Title, variant === "white" && style.Title__white].join(
        " "
      )}
      ref={ref}
      id={idScroll}
    >
      <div className="container">
        <div className={style.Title__wrap} id={"title"}>
          {kicker && <span className={style.Title__kicker}>{kicker}</span>}
          <h2 className={style.Title__heading}>{title}</h2>
          <span className={style.Title__accent} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Title;
