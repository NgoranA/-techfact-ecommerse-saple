import React, { useContext } from "react";
import Context from "../store/utils/context";

const Navbar = (props) => {
  const { cartItems, incrementQuantity, decrementQuantity } =
    useContext(Context);
  let total = 0;
  cartItems.map((item) => {
    return (total = total + item.quantity * item.price);
  });

  return (
    <>
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
              <span id="count"> {cartItems.length} </span>
            </i>
          </button>
        </div>
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
                className="close btn btn-secondary modalClose "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {cartItems.length === 0 ? (
                <p>There are no items in you cart</p>
              ) : (
                cartItems.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className="container align-items-center justify-content-between mb-5  "
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src={item.img}
                            height={100}
                            width={100}
                            alt="product"
                          />
                        </div>
                        <div className="ps-5 col ">
                          <div className="d-flex flex-column">
                            <div>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6>Title</h6>
                                <h6> {item.title} </h6>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6>Category</h6>
                                <h6> {item.category} </h6>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6>Price</h6>
                                <h6> {item.price} XAF </h6>
                              </div>
                            </div>
                            <div>
                              <div className="d-flex justify-content-between align-items-center">
                                <h6>Quantity </h6>
                                <div>
                                  <div className="d-flex justify-content-between gap-3 align-items-center ">
                                    <button
                                      className="btn btn-secondary"
                                      onClick={() => {
                                        decrementQuantity(item);
                                      }}
                                    >
                                      <i className="fa-regular fa-square-minus"></i>
                                    </button>
                                    <h6> {item.quantity} </h6>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => incrementQuantity(item)}
                                    >
                                      <i className="fa-regular fa-square-plus"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            <div className="d-flex align-items-center justify-content-between p-4">
              <h6> Total </h6>
              <h6 className="total">{total} XAF</h6>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Exit
              </button>
              <button type="button" className="btn btn-danger">
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
