import React from "react";
// REDUX TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setSelectedLocation } from "../redux-toolkit/selectedLocationSlice";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmog } from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  const location = useSelector((state) => state.location.value);
  const dispatch = useDispatch();

  const onChangeFunc = (e) => {
    if (e.key === "Enter") {
      dispatch(setSelectedLocation(e.target.value));
      e.target.value = "";
    }
  };

  return (
    <section className="flex flex-col items-center ml-5 py-5">
      <div className="flex flex-row items-center justify-around w-44 py-2">
        <h1 className="text-xl font-poppins font-semibold">Weather App</h1>
        <FontAwesomeIcon icon={faSmog} className="text-3xl" />
      </div>

      <input
        className="text-center h-12 rounded-lg shadow-md outline-none"
        type="text"
        placeholder="Search for a location"
        onKeyDown={onChangeFunc}
      />
    </section>
  );
};

export default Searchbar;
