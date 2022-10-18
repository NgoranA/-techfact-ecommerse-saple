import React from "react";

const Product = (props) => {
  return (
    <>
      <div className="card">
        <div className="img">
          <img
            alt="product img"
            width={"100%"}
            height={"220px"}
            src={props.details.img}
          />
        </div>
        <div className="para">
          <p>{props.details.title}</p>
          <p> {props.details.price} XAF</p>
          <button
            onClick={() => props.addToCart(props.details)}
            className="but"
          >
            Add to card
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
