import style from "./Realisations.module.scss";

// ** Next **
import Image from "next/legacy/image";

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
    const cards = element.querySelectorAll(`.${style.Realisations__card}`);

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: (index % 2) * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      className={[style.Realisations].join(" ")}
      ref={ref}
      id={"realisations"}
    >
      <div className={style.Realisations__grid}>
        {realisations.map((item, index) => {
          return (
            <a
              key={index}
              href={item.address}
              target={"_blank"}
              rel="noopener noreferrer"
              className={style.Realisations__card}
              aria-label={`Voir le site ${item.title}`}
            >
              <div className={style.Realisations__media}>
                <Image
                  layout="fill"
                  src={item.screenshot}
                  objectFit={"cover"}
                  objectPosition={"top center"}
                  alt={`Capture d'écran du site ${item.title} — ${item.type}`}
                />
                <div className={style.Realisations__overlay}>
                  <span className={style.Realisations__cta}>
                    Voir le site →
                  </span>
                </div>
              </div>

              <div className={style.Realisations__body}>
                <div className={style.Realisations__head}>
                  <h3>{item.title}</h3>
                  <span className={style.Realisations__type}>{item.type}</span>
                </div>

                <p className={style.Realisations__desc}>{item.description}</p>

                <ul className={style.Realisations__tags}>
                  {item.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Realisations;
