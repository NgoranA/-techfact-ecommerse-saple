import React from "react";
// import Product from "./Product";
import Context from "../store/utils/context";

const Products = (props) => {
  const { addToCart } = React.useContext(Context);
  // let prods =
  //   props.selectedCategory.label === "All"
  //     ? props.products
  //     : props.products.filter(
  //         (it) => it.category === props.selectedCategory.label
  //       );
  // if (props.search) {
  //   prods = prods.filter((it) =>
  //     it.title.toLowerCase().includes(props.search.toLowerCase())
  //   );
  // }

  return (
    <div className="item0">
      <div className="item1">
        {props.products.length ? (
          <div className="card0">
            {props.products.map((prod) => {
              return (
                <div key={prod._id} className="card">
                  <div className="img">
                    <img
                      alt="product img"
                      width={"100%"}
                      height={"220px"}
                      src={prod.img}
                    />
                  </div>
                  <div className="para">
                    <p>{prod.title}</p>
                    <p> {prod.price} XAF</p>
                    <button onClick={() => addToCart(prod)} className="but">
                      Add to card
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="d-flex justify-content-center mb-5">
            <p className="py-2 px-3 text-danger">loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
