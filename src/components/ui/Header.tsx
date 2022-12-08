import React from "react";
import NavMenu from "./NavMenu";

import "../../styles/common.css";

interface IProps {
  children: React.ReactElement;
}

const Header: React.FC<IProps> = ({
  children: c,
}) => {
  return (
    <header className="flex space-between align-center">
      {c}
      <NavMenu  />
    </header>
  );
};

export default Header;
