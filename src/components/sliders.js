import React from "react";
import { QuoteSlider, QuotesCard } from './index';

export const QuoteSliders = ({ data }) => {

  return(
    <QuoteSlider>
      {
        data.map(el => {
          return (
            <QuotesCard el={el} key={el.id} />
          );
        })
      }
    </QuoteSlider>
  );
}