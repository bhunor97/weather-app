import React from "react";
// REDUX TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { setSelectedLocation } from "../redux-toolkit/selectedLocationSlice";

const Searchbar = () => {
  const location = useSelector((state) => state.location.value);
  const dispatch = useDispatch();

  const onChangeFunc = (e) => {
    if (e.key === "Enter") {
      dispatch(setSelectedLocation(e.target.value));
      e.target.value = "";
    }
  };

  // console.log(location);

  return (
    <>
      <input
        className="text-center h-12 rounded-md shadow-md outline-none"
        type="text"
        placeholder="Search for a location"
        onKeyDown={onChangeFunc}
      />
    </>
  );
};

export default Searchbar;
