import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserData from "./components/UserData";
import Map from "./components/Map";

const App = () => {
  return (
    <main>
      <SearchBar />
      <div className="user-data-container">
        <UserData />
      </div>
      <Map />
    </main>
  );
};

export default App;
