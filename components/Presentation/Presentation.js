import style from "./Presentation.module.scss";

import Lottie from "lottie-react";
import reactLottie from "../../asset/lotties/react-native.json";
import webLottie from "../../asset/lotties/63487-programming-computer.json";

// ** Hooks **
import { useRef, useEffect } from "react";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// ** Content **
import expertiseContent from "../../asset/content/expertise.json";

const Presentation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector("#reactLottie"),
      {
        opacity: 0,
        x: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#reactLottie"),
          start: "0px bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#webLottie"),
      {
        opacity: 0,
        x: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#webLottie"),
          start: "100px bottom",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={[style.Presentation, "container"].join(" ")} ref={ref}>
      {expertiseContent.map((item, index) => {
        return (
          <div
            className={style.Presentation__content}
            key={index}
            id={index === 0 ? "reactLottie" : "webLottie"}
          >
            <div className={style.Presentation__left} id={"paragraph"}>
              <h2>{item.title}</h2>
              {item.txt.map((txt, index) => {
                return <p key={index}>{txt}</p>;
              })}
            </div>

            <div className={style.Presentation__right}>
              <div
                className={[
                  style.Presentation__lottie,
                  index === 1 && style.Presentation__lottie__var,
                ].join(" ")}
              >
                <Lottie
                  animationData={index === 0 ? reactLottie : webLottie}
                  loop
                  autoPlay
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Presentation;
