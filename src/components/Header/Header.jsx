import React, { useContext } from "react";
import styles from "./Header.module.css";
import coin from "../../assets/coin.png";
import { Context } from "../../store/context";

const Header = () => {
  const { sum } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.header__content}>
        <div className={styles["header__content-info"]}>
          <span>
            <img src={coin} alt="coin" />
          </span>
          <span>{sum}</span>
        </div>
        <span className={styles["header__content-title"]}>Магазин</span>
        <div className={styles["header__content-btn"]}>
          <button className={styles["header__btn-left"]}>...</button>
          <button className={styles["header__btn-right"]}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
