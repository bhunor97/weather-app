import React from "react";
// COMPONENTS
import HeaderIcon from "../icons/HeaderIcon";
// REDUX TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setSelectedLocation } from "../redux-toolkit/selectedLocationSlice";

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
    <section className="flex flex-col items-center mb-10">
      <div className="flex flex-row items-center justify-around w-max ">
        <h1 className="text-titleSize text-titleColor font-headerType">
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
    </section>
  );
};

export default Searchbar;
