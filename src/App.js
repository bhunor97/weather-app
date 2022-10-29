import React from "react";
import { useState, useEffect } from "react";
// COMPONENTS
import Searchbar from "./components/Searchbar";
import ReactQuery from "./api/ReactQuery";
// REDUX TOOLKIT
import { useSelector } from "react-redux";

const App = () => {
  const weather = useSelector((state) => state.weather.value);

  return (
    <section className="bg-blue-100 h-screen text-center">
      <h1 className="text-xl pt-5">Weather App</h1>
      <Searchbar />
      <ReactQuery />
    </section>
  );
};

export default App;
