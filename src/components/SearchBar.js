import React from "react";
import arrowIcon from "../images/icon-arrow.svg";

const SearchBar = () => {
  return (
    <div className="search-container">
      <h1>IP Address Tracker</h1>
      <div className="input-container">
        <input type="text" placeholder="Search for any IP address or domain" />
        <span className="submit-form-btn" style={{ backgroundColor: "#000" }}>
          <img src={arrowIcon} />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
