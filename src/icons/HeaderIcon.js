import React from "react";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmog } from "@fortawesome/free-solid-svg-icons";

const HeaderIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faSmog}
      className="text-titleSize text-titleColor px-2"
    />
  );
};

export default HeaderIcon;
