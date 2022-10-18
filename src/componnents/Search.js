import React from "react";

const Search = (props) => {
  return (
    <div className=" d-flex justify-content-center  mb-5 input-group">
      <div className="w-50">
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
          value={props.search}
          placeholder="Search Item"
        />
      </div>
    </div>
  );
};

export default Search;
