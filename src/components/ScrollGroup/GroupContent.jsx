import React from "react";
import styles from "./GroupContent.module.css";
import data from "./data";
import ContentLists from "./ContentLists";

const GroupContent = ({ selected }) => {
  return (
    <div className={styles.groupContent}>
      <span className={styles.groupContent__title}>{selected}</span>
      <ContentLists data={data} />
    </div>
  );
};

export default GroupContent;
