import style from "./CheckboxMenu.module.scss";

const CheckboxMenu = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <div
      className={[
        style.CheckboxMenu,
        isOpenMenu && style.CheckboxMenu__rotate,
      ].join(" ")}
      onClick={() => setIsOpenMenu(!isOpenMenu)}
    >
      <div
        className={[
          style.CheckboxMenu__bar,
          isOpenMenu && style.CheckboxMenu__open,
        ].join(" ")}
      ></div>
    </div>
  );
};

export default CheckboxMenu;
