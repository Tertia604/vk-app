import React from "react";
import styles from "./StatusBar.module.css";
import wifi from "../../assets/wifi.png";
import battery from "../../assets/battery.png";
import connection from "../../assets/connection.png";

const img = {
  connection: {
    width: "17px",
    height: "11px",
  },
  wifi: {
    width: "15px",
    height: "11px",
  },
  battery: {
    width: "24px",
    height: "11px",
  },
};

const StatusBar = () => {
  const timeNow = new Date().toLocaleTimeString().slice(0, -3);

  return (
    <div className={styles.statusBar__content}>
      <span className={styles["statusBar__content-time"]}>{timeNow}</span>
      <div className={styles["statusBar__content-info"]}>
        <span>
          <img src={connection} alt="connection" style={img.connection} />
        </span>
        <span>
          <img src={wifi} alt="wifi" style={img.wifi} />
        </span>
        <span>
          <img src={battery} alt="battery" style={img.battery} />
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
