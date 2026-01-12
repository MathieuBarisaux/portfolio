import style from "./Offers.module.scss";

// ** Next **
import Link from "next/link";

// ** Components
import Button from "../Button/Button";

// ** Icons **
import { FaCheck } from "react-icons/fa";

// ** Content **
import services from "../../asset/content/services.json";

// ** Hooks **
import { useRef, useEffect } from "react";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Offers = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector("#project"),
      {
        opacity: 0,
        x: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#project"),
          start: "100px bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#freelance"),
      {
        opacity: 0,
        x: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#freelance"),
          start: "100px bottom",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={[style.Offers, "container"].join(" ")} ref={ref}>
      {services.map((item, index) => {
        return (
          <div className={style.Offers__box} key={index} id={index === 0 ? "project" : "freelance"}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>

            <Link href="/#contact">
              <Button buttonText={item.button} />
            </Link>

            <div className={style.Offers__attributes}>
              {item.attributes.map((attibute, index) => {
                return (
                  <p key={index}>
                    <FaCheck />
                    {attibute}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Offers;
