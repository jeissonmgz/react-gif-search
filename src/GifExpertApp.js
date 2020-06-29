import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = (props) => {
  const [categories, setCategories] = useState([
    "soccer",
    "basketball",
    "golf",
  ]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "other"]);
  //   };
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>+ Add</button> */}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
