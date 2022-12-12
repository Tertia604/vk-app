import React, { useContext, useEffect, useState } from "react";
import styles from "./GroupContent.module.css";
import {
  Button,
  Card,
  CardGrid,
  ModalDismissButton,
  Panel,
  PopoutWrapper,
  SplitCol,
  SplitLayout,
  View,
} from "@vkontakte/vkui";
import coin from "../../assets/coin.png";
import { Context } from "../../store/context";
import data from "./data";

const card = {
  height: "94px",
  width: " 94px",
  borderRadius: "20px",
  margin: "4px 6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const newArray = data.map((item) => item.amount);

const CustomPopout = ({ onClose, item, index }) => {
  const { sum, setSum } = useContext(Context);
  const [amount, setAmount] = useState(newArray);
  const sizeX = 1;

  const nextSum = sum - item.cost;

  const clickHandler = (item) => {
    onClose();
    setSum((prev) => {
      return prev - item.cost;
    });
    setAmount((prevState) => (prevState[index] -= 1));
  };

  return (
    <PopoutWrapper onClick={onClose}>
      <div
        style={{
          backgroundColor: "var(--vkui--color_background_content)",
          borderRadius: 8,
          position: "relative",
          padding: "12px",
          height: "150px",
          width: "300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h4>Купить 1шт {item.name}?</h4>
          <span>Осталось: {amount[index]}</span>
          {nextSum > 0 ? "" : <span>Не хватает денег</span>}
          {amount[index] < 1 && <span>Товар закончился</span>}
          {nextSum > 0 && amount[index] > 0 ? (
            <Button onClick={() => clickHandler(item)}>Купить</Button>
          ) : (
            <Button disabled={true} onClick={() => clickHandler(item)}>
              Купить
            </Button>
          )}
        </div>

        {sizeX.regular && (
          <ModalDismissButton
            className={sizeX.regular.className}
            onClick={onClose}
          />
        )}
      </div>
    </PopoutWrapper>
  );
};

const ContentLists = ({ data }) => {
  const [popout, setPopout] = React.useState(null);

  const onClick = (item, index) => {
    setPopout(
      <CustomPopout item={item} index={index} onClose={() => setPopout(null)} />
    );
  };

  return (
    <>
      <SplitLayout popout={popout}>
        <SplitCol>
          <View activePanel="panel">
            <Panel id="panel">
              <div className={styles.groupContent__scroll}>
                <CardGrid size="s">
                  {data.map((item, index) => {
                    return (
                      <div
                        className={styles.groupContent__cardList}
                        key={item.cost}
                        onClick={() => onClick(item, index)}
                      >
                        <>
                          <Card mode="outline" style={card}>
                            <img src={item.img} alt={item.name} />
                          </Card>
                        </>
                        <div className={styles.groupContent__card}>
                          <span className={styles["groupContent__card-name"]}>
                            {item.name}
                          </span>
                          <div className={styles["groupContent__card-cost"]}>
                            <span>
                              <img src={coin} alt="coin" />
                            </span>
                            <span style={{ marginLeft: "8px" }}>
                              {item.cost}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardGrid>
              </div>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </>
  );
};

export default ContentLists;
