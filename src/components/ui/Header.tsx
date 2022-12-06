import React, { useState } from "react";
import "../../styles/common.css";
import "../../styles/header.css";
import { BsSun, BsMoon, BsSearch } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: any;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [toggleBar, setToggleBar] = useState<boolean>(false);

  const toggleMode = (state: boolean, setFunc: any) => setFunc(!state);

  return (
    <div className=" flex-center main-background-color">
      <div className="header-wrap flex-sb">
        <div className="logo flex-center"></div>

        <div className="nav-wrap flex">
          {darkMode ? (
            <div
              className="nav-icon flex-center"
              onClick={() => toggleMode(darkMode, setDarkMode)}
            >
              <BsSun size={30} />
            </div>
          ) : (
            <div
              className="nav-icon flex-center"
              onClick={() => toggleMode(darkMode, setDarkMode)}
            >
              <BsMoon size={30} />
            </div>
          )}

          <div className="nav-icon flex-center">
            <BsSearch size={25} />
          </div>
          <div className="new-article flex-center">새글 작성</div>
          <div className="profile-wrap flex-sb">
            <div>프사</div>
            <div
              className="toggle_btn flex-center"
              onClick={() => toggleMode(toggleBar, setToggleBar)}
            >
              <GoTriangleDown />
            </div>
          </div>
        </div>
        {toggleBar && (
          <div className="bars">
            <ul>
              <li>내 벨로그</li>
              <li>임시 글</li>
              <li>읽기 목록</li>
              <li>설정</li>
              <li>로그아웃</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
