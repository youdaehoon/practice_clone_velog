import React from "react";
import Layout from "../../../components/ui/Layout";
import TapSection from "./tapSection/Index";
import PostSection from "./postsection";

const MainBody = () => {
  return (
    <Layout
      padding={"0rem 5rem"}
      classNameArrCommon={["main-background-color"]}
    >
      <>
        <TapSection />
        <PostSection />
      </>
    </Layout>
  );
};

export default MainBody;
