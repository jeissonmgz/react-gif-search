import { useState, useEffect } from "react";
import { getGifts } from "../commons/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifts(category).then((gifs) => setstate({ data: gifs, loading: false }));
  }, [category]);
  return state;
};
