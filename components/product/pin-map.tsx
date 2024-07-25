"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { icon } from "leaflet"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export interface PinProps {
    lat: number;
    long: number;
    thumbnail: string;
}

export function PinMap({ lat, long, thumbnail }: PinProps) {
    if (typeof window === "undefined") {
        return null;
    }
    if (!lat || !long) {
        return <>Không có dữ liệu bản đồ</>
    }
    const ICON = icon({
        iconUrl: thumbnail,
        iconSize: [64, 64],
    })
    return (
        <MapContainer
            preferCanvas={true}
            center={[lat, long]}
            zoom={15}
            scrollWheelZoom={true}
            // layers={[titles]}
            style={{ height: "50dvh", width: "95%", margin: "auto" }}
        >
            <TileLayer
                attribution=''
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* <Marker icon={ICON} position={[lat, long]}>
            </Marker> */}

            <Marker position={[lat, long]}>
                <Popup>
                    Vị trí bất động sản
                </Popup>
            </Marker>

        </MapContainer>
    );
}
// export default function Map() 