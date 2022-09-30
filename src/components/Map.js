import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import icon from "../images/icon-location.svg";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: icon,
  iconUrl: icon,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = ({ userData }) => {
  const [position] = useState([userData.lat, userData.lng]);

  return (
    <div className="leaflet-container">
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{userData.city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
