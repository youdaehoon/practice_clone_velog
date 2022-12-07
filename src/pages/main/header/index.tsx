import React, { useState } from "react";
import NavMenu from "../../../components/ui/NavMenu";
import "../../../styles/common.css";
import HeaderLogo from "./HeaderLogo";
import "./index.css";
interface MainHeaderProps {
  darkMode: boolean;
  setDarkMode: any;
}

const MainHeader: React.FC<MainHeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className=" flex space-between align-center main-background-color">
      <HeaderLogo/>
      <NavMenu darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default MainHeader;
