import React, { useEffect, useState } from "react";
import styles from "./BottomScreen.module.css";
import Item from "./Item";

const mainList = ["Одежда", "Еда", "Бустеры", "Валюта"];

const BottomScreen = ({ headerTitile }) => {
  const [select, setSelected] = useState(mainList[0]);

  const clickHandler = (index) => {
    setSelected(mainList[index]);
  };

  useEffect(() => {
    headerTitile(select);
  }, [select]);

  return (
    <>
      <div className={styles.bottomScreen}>
        {mainList.map((item, index) => (
          <Item
            key={item}
            item={item}
            index={index}
            click={() => clickHandler(index)}
          />
        ))}
      </div>
    </>
  );
};

export default BottomScreen;
