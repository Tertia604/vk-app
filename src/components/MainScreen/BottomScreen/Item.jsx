import React, { useState } from "react";
import styles from "./Item.module.css";

const Item = ({ item, click, index }) => {
  const [active, setActive] = useState(false);
  const [inactive, setInactive] = useState(true);

  const clickHandler = (index) => {
    click(index);
    setActive((prevState) => !prevState);
    setInactive((prevState) => !prevState);
  };

  return (
    <button
      className={`${styles.item} ${active && !inactive ? styles.test : ""}`}
      onClick={() => clickHandler(index)}
    >
      {item}
    </button>
  );
};

export default Item;
