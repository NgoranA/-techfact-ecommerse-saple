import React from "react";
import Categories from "./Categories";
import Products from "./Products";
import data from "../products";
import Search from "./Search";

const Shop = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  cartItems,
  setCartItems,
  addToCart,
  listCat,
  setListCat,
}) => {
  const [products, setProducts] = React.useState(data);
  const [search, setSearch] = React.useState("");
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="mt-5">
          <h1>SHOP</h1>
          <div className="souligne"></div>
        </div>
      </div>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        listCat={listCat}
        setListCat={setListCat}
      />
      <Search search={search} setSearch={setSearch} />
      <Products
        addToCart={addToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        products={products}
        selectedCategory={selectedCategory}
        search={search}
      />
    </>
  );
};

export default Shop;
