import { useState, useEffect } from "react";
import { getGifts } from "../commons/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifts(category).then((gifs) => {
      setTimeout(() => setstate({ data: gifs, loading: false }), 2000);
    });
  }, [category]);
  return state;
};
