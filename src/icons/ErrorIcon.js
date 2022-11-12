import React from "react";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleXmark } from "@fortawesome/free-solid-svg-icons";

const ErrorIcon = () => {
  return (
    <>
      <FontAwesomeIcon icon={faFileCircleXmark} className="text-white" />
    </>
  );
};

export default ErrorIcon;
