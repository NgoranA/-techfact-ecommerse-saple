import React from "react";

const Navbar = (props) => {
  return (
    <div className="shop  sticky-top navbar">
      <div className="container">
        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
          OUR<span style={{ color: "red" }}>Shop</span>
        </h1>

        <div className="top1">
          <a href="#" className="active" style={{ marginRight: "15px" }}>
            Home
          </a>
          <a href="#" style={{ marginRight: "15px" }}>
            promotion
          </a>
          <a href="#" style={{ marginRight: "15px" }}>
            Contact
          </a>
        </div>
        <button
          type="button"
          data-bs-target="#exampleModalCenter"
          data-bs-toggle="modal"
          style={{ border: "none" }}
          className="bask"
        >
          <i className="fa-sharp fa-solid fa-cart-shopping">
            <span id="count"> {props.cartItems.length} </span>
          </i>
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Cart
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.cartItems.length === 0 ? (
                <p>There are no items in you cart</p>
              ) : (
                props.cartItems.map((item) => {
                  return <div key={item.id}>hell</div>;
                })
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Exit
              </button>
              <button type="button" className="btn btn-primary">
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
