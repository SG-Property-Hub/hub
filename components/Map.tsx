"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
// import Leaflet from 'leaflet';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  // const titles = new Leaflet.TileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
  //   attribution: ' Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   subdomains: 'abcd',
  //   minZoom: 0,
  //   maxZoom: 18,
  //   ext: 'png'
  // });
  return (
    <MapContainer
      preferCanvas={true}
      center={[10.773081, 106.6829]}
      zoom={14}
      scrollWheelZoom={true}
      // layers={[titles]}
      style={{ height: "50dvh", width: "95%", margin: "auto"}}
    >
      <TileLayer
        attribution=''
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker position={[10.773081, 106.6829]}>
        <Popup>
          This Marker icon is displayed correctly with <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
// export default function Map() 