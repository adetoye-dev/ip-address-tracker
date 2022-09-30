import React, { useState } from "react";
import arrowIcon from "../images/icon-arrow.svg";

const SearchBar = ({ searchData }) => {
  const [input, setInput] = useState();
  return (
    <div className="search-container">
      <h1 className="title">IP Address Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span
          className="submit-form-btn"
          style={{ backgroundColor: "#000" }}
          onClick={() => searchData(input)}
        >
          <img src={arrowIcon} alt="arrow-icon" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
