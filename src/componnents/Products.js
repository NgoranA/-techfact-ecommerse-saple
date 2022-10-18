import React from "react";
import Product from "./Product";

const Products = (props) => {
  let prods =
    props.selectedCategory.label === "All"
      ? props.products
      : props.products.filter(
          (it) => it.category === props.selectedCategory.label
        );
  if (props.search) {
    prods = prods.filter((it) =>
      it.title.toLowerCase().includes(props.search.toLowerCase())
    );
  }

  return (
    <div className="item0">
      <div className="item1">
        {prods.length ? (
          <div className="card0">
            {prods.map((prod) => {
              return (
                <Product
                  cartItems={props.cartItems}
                  setCartItems={props.setCartItems}
                  key={prod.id}
                  details={prod}
                  addToCart={props.addToCart}
                />
              );
            })}
          </div>
        ) : (
          <div className="d-flex justify-content-center mb-5">
            <p className="py-2 px-3 text-danger">
              Products have not been found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
