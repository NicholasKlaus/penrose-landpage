import React, { useEffect, useState } from "react";
import { Header, QuoteSliders } from "./components/index";
import { MainLayout } from "./components/MainLayout";

export const Home = () => {
  const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res.filter(item => item.price < 5.00)))
    .catch(err => {
      throw new Error(err);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <MainLayout>
      <Header />
      <div className="container">
        <div className="wrap">
          <QuoteSliders data={data} />
        </div>
        <div>
          <iframe 
            className="video-player"
            src="https://www.youtube.com/embed/S8P-P-rq3-k" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </MainLayout>
  );
}