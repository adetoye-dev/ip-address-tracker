import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import UserData from "./components/UserData";
import Map from "./components/Map";

const App = () => {
  const [userData, setUserData] = useState({
    ip: "",
    timezone: "+ 01:00",
    isp: "MTN NIGERIA",
    lat: "6.4541",
    lng: "3.3947",
    city: "Lagos",
    country: "NG",
    postalCode: "100211",
  });

  const searchData = (ipAddress) => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_hJGEMP4mxrTUlMrMpPnkDOLSKIXlj&ipAddress=${ipAddress}`
    )
      .then((res) => res.json())
      .then((data) =>
        setUserData({
          ip: data.ip,
          timezone: data.location.timezone,
          isp: data.isp,
          lat: data.location.lat,
          lng: data.location.lng,
          city: data.location.city,
          country: data.location.country,
          postalCode: data.location.postalCode,
        })
      );
  };

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => searchData(data.ip));
  }, []);

  return (
    <main>
      <SearchBar />
      <div className="user-data-container">
        <UserData userData={userData} />
      </div>
      <Map lat={userData.lat} lng={userData.lng} />
    </main>
  );
};

export default App;
