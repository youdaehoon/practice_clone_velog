import React, { useState } from "react";
import "../../styles/common.css";
import "../../styles/header.css";
import { BsSun, BsMoon, BsSearch } from "react-icons/bs";

const Header: React.FC = ({ darkMode, setDarkMode }) => {
  

  return (
    <div className="header-wrap flex-sb">
      <div className="logo flex-center"></div>

      <div className="nav-wrap flex">
        {darkMode ? (
          <div>
            <BsSun onClick={() => setDarkMode(!darkMode)} />
          </div>
        ) : (
          <div>
            <BsMoon onClick={() => setDarkMode(!darkMode)} />
          </div>
        )}

        <div>
          <BsSearch />
        </div>
        <div>새글작성</div>
        <div>
          <div>프사</div>
          <div>토글</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
