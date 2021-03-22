import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Pokemon"]);

  //   const handleAdd = () => {
  //     const newItem = "Pikachu";
  //     // setCategories([...categories, newItem]);
  //     setCategories((cats) => [...cats, newItem]);
  //   };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
