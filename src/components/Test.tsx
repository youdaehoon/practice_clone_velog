import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

const Test = () => {
  const data = useAppSelector(state => state.posts.datas);
  const dispatch = useAppDispatch();

  console.log(data);

  return <div></div>;
};

export default Test;
