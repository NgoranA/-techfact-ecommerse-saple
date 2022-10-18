import React from "react";

const Categories = ({
  listCat,
  setListCat,
  setSelectedCategory,
  selectedCategory,
}) => {
  const handleSelection = (category) => {
    const va = listCat.map((it) => {
      if (it.status) {
        return { ...it, status: false };
      }
      if (it.label === category.label) {
        return { ...it, status: true };
      }
      return it;
    });
    setSelectedCategory(category);
    setListCat(va);
  };
  return (
    <div className="row0">
      <div className="row1">
        {listCat.map((cat, i) => {
          return (
            <button
              key={i}
              onClick={() => handleSelection(cat)}
              className={` ${
                cat.status === true
                  ? "catButtonSelected"
                  : "catButtonUnSelected"
              }  boutt`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
