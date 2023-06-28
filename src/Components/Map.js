import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import MockProjectApi from "../api/api";
import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

function Map() {
  const [geoData, setGeoData] = useState(null);
  useEffect(function getGeoData() {
    async function grabGeoData() {
      setGeoData(await MockProjectApi.getData());
    }
    grabGeoData();
    console.log(geoData);
  }, []);
  const position = [39.2, -75.523];
  const deStyle = {
    weight: 0.3,
    color: "black",
    fillColor: "white",
    fillOpacity: 0.8,
  };
  const onEachCT = (feature, layer) =>{
    const cTName = feature.properties.NAME;   
    layer.on('mouseover', function (e) {
      layer.bindPopup(cTName).openPopup();
    });
  }

  if (!geoData) return <Spinner/>
  return (
    <section className="map-component">
      <div className="map" id="map">
        <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
          <GeoJSON data={geoData} style={deStyle} onEachFeature={onEachCT}/>
        </MapContainer>
      </div>
    </section>
  );
}
export default Map;
