import "./App.css";
import React, { useState } from "react";

import { AppRoot, FixedLayout } from "@vkontakte/vkui";
import StatusBar from "./components/StatusBar/StatusBar";
import Header from "./components/Header/Header";
import MainScreen from "./components/MainScreen/MainScreen";
import GroupContent from "./components/ScrollGroup/GroupContent";
import Footer from "./components/Footer/Footer";
import { Context } from "./store/context";

const contentStyles = {
  paddingTop: 370,
};

function App() {
  const [selected, setSelected] = useState("");
  const [sum, setSum] = useState(1800);

  const headerTitile = (item) => {
    setSelected(item);
  };

  return (
    <AppRoot>
      <div className="mobile">
        <Context.Provider value={{ sum, setSum }}>
          <FixedLayout>
            <StatusBar />
            <Header />
            <MainScreen headerTitile={headerTitile} />
          </FixedLayout>

          <div style={contentStyles}>
            <GroupContent selected={selected} />
          </div>

          <FixedLayout>
            <Footer />
          </FixedLayout>
        </Context.Provider>
      </div>
    </AppRoot>
  );
}

export default App;
