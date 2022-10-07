import style from "./Realisations.module.scss";

// ** Next **
import Image from "next/image";

// ** Content **
import realisations from "../../asset/content/realisations.json";

const Realisations = () => {
  return (
    <div className={[style.Realisations].join(" ")}>
      <div className="container">
        {realisations.map((item, index) => {
          return (
            <div className={style.Realisations__projet} key={index}>
              <div className={style.Realisations__left}>
                <div className={style.Realisations__txt}>
                  <h3>{item.title}</h3>
                  <h4>{item.type}</h4>
                  <a>Voir le site</a>
                </div>

                <div className={style.Realisations__content}>
                  {/* <p>Application mobile</p> */}
                  <div className={style.Realisations__content__img}>
                    <Image
                      layout="fill"
                      src={item.picture_2}
                      objectFit={"contain"}
                    />
                  </div>
                </div>
              </div>

              <div className={style.Realisations__right}>
                <div className={style.Realisations__top}>
                  <div className={style.Realisations__content__img}>
                    <Image
                      layout="fill"
                      src={item.picture_1}
                      objectFit={"contain"}
                    />
                  </div>
                </div>

                <div className={style.Realisations__bottom}>
                  {/* <p>Dashboard de pilotage</p> */}
                  <div className={style.Realisations__content__img}>
                    <Image
                      layout="fill"
                      src={item.picture_3}
                      objectFit={"contain"}
                    />
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
