import React, { useState } from 'react'
import { BsSun, BsMoon, BsSearch } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import ProfileImage from "../ProfileImage";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: any;
}

const NavMenu: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [toggleBar, setToggleBar] = useState<boolean>(false);

  const toggleMode = (state: boolean, setFunc: any) => setFunc(!state);

  return (
    <div className="nav-wrap flex">
    {darkMode ? (
      <div
        className="nav-icon flex justify-center align-center"
        onClick={() => toggleMode(darkMode, setDarkMode)}
      >
        <BsSun size={30} />
      </div>
    ) : (
      <div
        className="nav-icon flex justify-center align-center"
        onClick={() => toggleMode(darkMode, setDarkMode)}
      >
        <BsMoon size={30} />
      </div>
    )}

    <div className="nav-icon flex justify-center align-center">
      <BsSearch size={25} />
    </div>
    <div className="new-article flex justify-center align-center">
      새글 작성
    </div>
    <div className="profile-wrap flex space-between align-center">
      <ProfileImage
        width={50}
        height={50}
        url={
          "https://velog.velcdn.com/images/ninto_2/post/e4eaa7ec-223f-4ada-be19-11dadf1d8d0f/image.gif"
        }
      />
      <div
        className="toggle_btn flex justify-center align-center"
        onClick={() => toggleMode(toggleBar, setToggleBar)}
      >
        <GoTriangleDown />
      </div>
    </div>
    {toggleBar && (
      <div className="bars flex flex-column">
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
  )
}

export default NavMenu