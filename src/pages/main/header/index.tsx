import React, { useState } from "react";
import Header from "../../../components/ui/Header";
import Layout from "../../../components/ui/Layout";

import "../../../styles/common.css";
import HeaderLogo from "./HeaderLogo";
import "./index.css";

const MainHeader: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <header className=" flex space-between align-center main-background-color">
      <Header darkMode={darkMode} setDarkMode={setDarkMode}>
        <HeaderLogo />
      </Header>
    </header>
  );
};

export default MainHeader;
