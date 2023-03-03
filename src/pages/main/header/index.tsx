import React, { useState } from "react";
import Header from "../../../components/ui/Header";
import Layout from "../../../components/ui/Layout";

import "../../../styles/common.css";
import HeaderLogo from "./HeaderLogo";
import "./index.css";

const MainHeader: React.FC = () => {
  
  return (
    <header className=" flex space-between align-center main-background-color">
      <Header >
        <HeaderLogo />
      </Header>
    </header>
  );
};

export default MainHeader;
