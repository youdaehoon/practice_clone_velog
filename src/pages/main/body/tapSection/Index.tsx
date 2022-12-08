import React from "react";
import "../../../../styles/common.css";
import "./index.css";
import {
  BiTrendingUp,
  BiTimeFive,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

const TapSection = () => {
  return (
    <div className="flex space-between align-center tap-wrap">
      <div className="flex space-between gap-10 align-center">
        <div className="flex align-center gap-5">
          <BiTrendingUp size={25} />
          <span>트렌딩</span>
        </div>
        <div className="flex align-center gap-5">
          <BiTimeFive size={25} />
          <span>최신</span>
        </div>
        <div className="flex align-center gap-5">
          <span>오늘</span>
          <GoTriangleDown size={15} />
        </div>
      </div>
      <div>
        <BiDotsVerticalRounded />
      </div>
    </div>
  );
};

export default TapSection;
