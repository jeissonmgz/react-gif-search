import React, { useState, useEffect } from "react";
import { GiftGridItem } from "./GiftGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifts(category);
  }, []);
  const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=ZefmqMjz8uhy3xSYf0SYps5gjRRYj9Om`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <hr />
      <div className="card-grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
