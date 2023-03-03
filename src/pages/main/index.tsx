import React from "react";
import { useAppSelector } from "../../redux/hooks";
import MainBody from "./body";
import MainHeader from "./header";
import Layout from "../../components/ui/Layout";

const Main: React.FC = () => {
  const select = useAppSelector(state => state.posts);
  // console.log(select);
  return (
    <Layout
      padding={"0rem 5rem"}
      classNameArrCommon={["main-background-color"]}
    >
      <>
        <MainHeader />
        <MainBody />
      </>
    </Layout>
  );
};

export default Main;
