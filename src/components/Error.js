import React from "react";
import ErrorIcon from "../icons/ErrorIcon";
// REDUX TOOLKIT
import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.error.value);

  const displayErrorFunc = () => {
    if (error[0] && error[1]) {
      return (
        <section className="text-white mt-[10rem] flex flex-row justify-center align-center font-dataNameType text-dataValueSize">
          <div>{`${error[0]} ${error[1]}`}</div>
          <div className="pl-5">
            <ErrorIcon />
          </div>
        </section>
      );
    }
  };

  return <div>{displayErrorFunc()}</div>;
};

export default Error;
