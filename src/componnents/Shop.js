import React, { useState, useEffect } from "react";
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
  const [products, setProducts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  useEffect(() => {
    let params = {};
    if (search) {
      params["search"] = search;
    }
    if (selectedCategory.label !== "All") {
      params["category"] = selectedCategory.label;
    }
    let url = `https://tfecommerce-prod-techfac-xgqfea.mo5.mogenius.io/?category=men`;
    fetch(url, {
      method: "GET",
    })
      .then((dat) => dat.json())
      .then((res) => {
        setProducts(res);
      });
  }, [selectedCategory, search]);
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
        setProducts={setProducts}
      />
      <Search search={search} setSearch={setSearch} />
      <Products
        addToCart={addToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        products={products}
        setProducts={setProducts}
        selectedCategory={selectedCategory}
        search={search}
      />
    </>
  );
};

export default Shop;
