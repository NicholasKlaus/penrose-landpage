import React from "react";
import Slider from "react-slick";
import { sliderConfig } from "../constants/sliderConfig";

export const QuoteSlider = ({children, config}) => {
  const settings = {
    ...sliderConfig,
    ...config
  };

  return (
    <Slider {...settings}>
      { children }
    </Slider>
  )
}