import React, { useState, useEffect } from "react";
import { GiftGridItem } from "./GiftGridItem";
import { getGifts } from "../commons/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifts(category).then((gifs) => setImages(gifs));
  }, [category]);

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
