import React from "react";
import BottomScreen from "./BottomScreen/BottomScreen";
import halloween from "../../assets/halloween.png";
import styles from "./MainScreen.module.css";

const MainScreen = ({ headerTitile }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainScreen}>
        <img src={halloween} alt="halloween" />
        <span className={styles.mainScreen}>Встречайте Хэллоуин!</span>
      </div>

      <BottomScreen headerTitile={headerTitile} />
    </div>
  );
};

export default MainScreen;
