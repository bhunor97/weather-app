import React from "react";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const Clock = () => {
  return (
    <span className="pr-2">
      <FontAwesomeIcon icon={faClockRotateLeft} />
    </span>
  );
};

export default Clock;
