import React from "react";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";

const Clock = () => {
  return (
    <span className="pr-2">
      <FontAwesomeIcon icon={faClockFour} />
    </span>
  );
};

export default Clock;
