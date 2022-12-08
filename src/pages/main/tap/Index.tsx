import React from "react";
import Layout from "../../../components/ui/Layout";
import "../../../styles/common.css";
import "./index.css";
import {
  BiTrendingUp,
  BiTimeFive,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

const MainTap = () => {
  return (
    <Layout
      padding={"0rem 5rem"}
      classNameArrCommon={["tap-wrap", "main-background-color"]}
    >
      <div className="flex space-between">
        <div className="flex space-between gap-10">
          <div>
            <BiTrendingUp />
            <span>트렌딩</span>
          </div>
          <div>
            <BiTimeFive />
            <span>최신</span>
          </div>
          <div>
            {/* <select name="" id=""></select> */}
            <span>오늘</span>
            <GoTriangleDown />
          </div>
        </div>
        <div>
          <BiDotsVerticalRounded />
        </div>
      </div>
    </Layout>
  );
};

export default MainTap;
