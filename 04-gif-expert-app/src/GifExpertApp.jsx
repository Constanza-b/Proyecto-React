import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setcategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input  */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {/* listado de gif  */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
