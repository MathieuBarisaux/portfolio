import style from "./Realisations.module.scss";

// ** Next **
import Image from "next/image";

// ** Content **
import realisations from "../../asset/content/realisations.json";

// ** Hooks **
import { useRef, useEffect } from "react";

// ** Dependancies **
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Realisations = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector("#box0"),
      {
        opacity: 0,
        x: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#box0"),
          start: "100px bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#box1"),
      {
        opacity: 0,
        x: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#box1"),
          start: "100px bottom",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector("#box2"),
      {
        opacity: 0,
        x: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector("#box2"),
          start: "100px bottom",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={[style.Realisations].join(" ")} ref={ref}>
      <div className={style.Realisations__container}>
        {realisations.map((item, index) => {
          return (
            <div className={style.Realisations__box} key={index}>
              <div className={style.Realisations__projet} id={`box${index}`}>
                <div className={style.Realisations__left}>
                  <div className={style.Realisations__txt}>
                    <h3>{item.title}</h3>
                    <h4>{item.type}</h4>
                    <a href={item.address} target={"_blank"} rel="noreferrer">
                      Voir le site
                    </a>
                  </div>

                  <div className={style.Realisations__content}>
                    <p>{item.picture_txt_2}</p>
                    <div className={[style.Realisations__content__img]}>
                      <Image
                        layout="fill"
                        src={item.picture_2}
                        objectFit={"contain"}
                        alt={item.picture_txt_2 + " " + item.title}
                      />
                    </div>
                  </div>
                </div>

                <div className={style.Realisations__right}>
                  <div className={style.Realisations__top}>
                    <p>{item.picture_txt_1}</p>
                    <div className={style.Realisations__content__img}>
                      <Image
                        layout="fill"
                        src={item.picture_1}
                        objectFit={"contain"}
                        alt={item.picture_txt_1 + " " + item.title}
                      />
                    </div>
                  </div>

                  <div className={style.Realisations__bottom}>
                    <p>{item.picture_txt_3}</p>
                    <div className={style.Realisations__content__img}>
                      <Image
                        layout="fill"
                        src={item.picture_3}
                        objectFit={"contain"}
                        alt={item.picture_txt_3 + " " + item.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Realisations;
