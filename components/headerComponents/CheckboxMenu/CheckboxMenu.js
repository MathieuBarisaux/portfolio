import style from "./CheckboxMenu.module.scss";

const CheckboxMenu = ({ isOpenMenu, setIsOpenMenu }) => {
  const isOpen = isOpenMenu === true;

  return (
    <button
      type="button"
      className={[
        style.CheckboxMenu,
        isOpen && style.CheckboxMenu__open,
      ].join(" ")}
      onClick={() => setIsOpenMenu(!isOpen)}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      aria-controls="primary-navigation"
    >
      <span className={style.CheckboxMenu__bar} aria-hidden="true" />
      <span className={style.CheckboxMenu__bar} aria-hidden="true" />
      <span className={style.CheckboxMenu__bar} aria-hidden="true" />
    </button>
  );
};

export default CheckboxMenu;
