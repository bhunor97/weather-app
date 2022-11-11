import React from "react";
// REDUX TOOLKIT
import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.error.value);

  console.log(error);
  return <></>;
};

export default Error;
