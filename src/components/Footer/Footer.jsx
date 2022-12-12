import React, { useState } from "react";
import styles from "./Footer.module.css";
import { Tabbar, TabbarItem, Separator } from "@vkontakte/vkui";
import {
  Icon24PawOutline,
  Icon24BankOutline,
  Icon24Tag,
} from "@vkontakte/icons";

const Footer = () => {
  const [simple, setSimple] = useState("one");

  return (
    <div className={styles.test}>
      <Separator wide />
      <Tabbar
        style={{
          position: "static",
          width: "375px",
          height: "83px",
          borderRadius: "0 0 20px 20px",
        }}
        shadow={false}
      >
        <TabbarItem
          selected={simple === "one"}
          onClick={() => setSimple("one")}
        >
          <Icon24BankOutline width={36} height={36} />
        </TabbarItem>
        <TabbarItem
          selected={simple === "two"}
          onClick={() => setSimple("two")}
        >
          <Icon24PawOutline width={36} height={36} />
        </TabbarItem>
        <TabbarItem
          selected={simple === "three"}
          onClick={() => setSimple("three")}
        >
          <Icon24Tag width={36} height={36} />
        </TabbarItem>
      </Tabbar>
    </div>
  );
};

export default Footer;
