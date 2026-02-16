import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../leaflet.css";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 
import 'leaflet-defaulticon-compatibility';
import '../../styles.css';

export const Geolocalizacion = () => {

  return (
    <>
      <div id="map">
        <MapContainer
            className="mapContainer"
            zoom={13}
            center={[51.505, -0.09]}
            scrollWheelZoom={false}
            fadeAnimation={true}
            markerZoomAnimation={true}
            >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    </div>
    </>
  );
};
