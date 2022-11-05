import React from "react";
import { useEffect } from "react";
// COMPONENTS
import randomNumBetweenFunc from "../../functions/RandomNumFunc";
// REDUX TOOLIT
import { useSelector, useDispatch } from "react-redux";
import { setFetchedImage } from "../../redux-toolkit/fetchImageSlice";
import {
  setLoadingWeatherOff,
  setLoadingWeatherOn,
} from "../../redux-toolkit/loadingWeatherSlice";

const ImageFetch = () => {
  const location = useSelector((state) => state.location.value);
  const fetchedImage = useSelector((state) => state.fetchedImage.value);
  const loadingWeather = useSelector((state) => state.loadingWeather.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessKey = "my3VYAXuf7lZyJGfpvlDokQtp2jNwJ-I5xm7H2AX7fI";
    // dispatch(setLoadingWeatherOn());

    const fetchImage = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${location}&client_id=${accessKey}`
      )
        .then((data) => {
          // dispatch(setLoadingWeatherOff());
          return data.json();
        })
        .catch((error) => console.log(error.message));

      dispatch(
        setFetchedImage(
          response.results[randomNumBetweenFunc(10)].links.download
        )
      );
    };
    fetchImage();
  }, [location]);

  // console.log(loadingWeather);

  return <></>;
};

export default ImageFetch;
