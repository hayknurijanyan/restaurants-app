import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Map = () => {
  const selectedRestaurant = useSelector((state) => state.selectedRestaurant);
  const restaurantsData = useSelector((state) => state.restaurantsData);
  const [center, setCenter] = useState({
    lat: 40.17,
    lng: 44.49,
  });
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    setCenter(selectedRestaurant.location);
    setZoom(13);
  }, [selectedRestaurant]);

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <GoogleMapReact
        defaultCenter={{
          lat: 40.17,
          lng: 44.49,
        }}
        defaultZoom={12}
        center={center}
        zoom={zoom}
      >
        {restaurantsData.map((data, i) => {
          return (
            <Marker
              data={data}
              lat={data.location.lat}
              lng={data.location.lng}
              key={i}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
