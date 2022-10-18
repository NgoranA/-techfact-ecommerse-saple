import React from "react";

const Topbar = () => {
  return (
    <div className="top-bar d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="text-light d-flex align-items-center">
          Free shipping on all u.s oders over 50XAF
        </div>

        <div className="top1 d-flex justify-content-between align-items-center">
          <a href="#" id="eccommer">
            eccommer@info.com
          </a>
          <a href="#" id="login">
            Login <i className="fa-solid fa-right-to-bracket"></i>
          </a>
          <button type="#" className="bt">
            <a href="#">
              <i className="fa-solid fa-user-plus use"></i> Register
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
