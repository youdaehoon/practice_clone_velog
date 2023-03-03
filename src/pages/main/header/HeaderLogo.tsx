import React from "react";
import { useNavigate } from "react-router-dom";
import { AnaliticEvent } from "../../../router/lib";
import "../../../styles/common.css";
import "./index.css";

const HeaderLogo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    AnaliticEvent("page_route", "main");
    navigate("/");
  };

  return (
    <div
      className="logo flex justify-center align-center"
      onClick={handleClick}
    ></div>
  );
};

export default HeaderLogo;
