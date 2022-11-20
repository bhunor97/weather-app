import React from "react";
// COMPONENTS
import HeaderIcon from "../icons/HeaderIcon";
// REDUX TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setSelectedLocation } from "../redux-toolkit/selectedLocationSlice";
// REACT SPRING
import { useSpring, animated } from "react-spring";
import { headerAnimation } from "../animations/SpringAnimations";

const Searchbar = () => {
  const location = useSelector((state) => state.location.value);
  const dispatch = useDispatch();

  const onSubmitLocation = (e) => {
    if (e.key === "Enter") {
      dispatch(setSelectedLocation(e.target.value));
      e.target.value = "";
    }
  };

  return (
    <animated.section
      style={useSpring(headerAnimation)}
      className="flex flex-col items-center mb-10"
    >
      <div className="flex flex-row items-center justify-around w-max ">
        <h1 className="text-small_titleSize lg:text-titleSize text-titleColor font-headerType font-titleWeight">
          Weather App
        </h1>
        <HeaderIcon />
      </div>

      <input
        className="text-center h-12 shadow-xl outline-none my-3"
        type="text"
        placeholder="Search for a location"
        onKeyDown={onSubmitLocation}
      />
    </animated.section>
  );
};

export default Searchbar;
