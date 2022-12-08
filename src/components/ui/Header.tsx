import React from "react";
import NavMenu from "./NavMenu";

import "../../styles/common.css";

interface IProps {
  children: React.ReactElement;
  darkMode: boolean;
  setDarkMode?: any;
}

const Header: React.FC<IProps> = ({
  children: c,
  darkMode: dm,
  setDarkMode: sdm,
}) => {
  return (
    <>
      {c}
      <NavMenu darkMode={dm} setDarkMode={sdm} />
    </>
  );
};

export default Header;
