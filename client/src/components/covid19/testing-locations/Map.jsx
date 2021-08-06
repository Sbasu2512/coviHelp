

import './map.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import L from 'leaflet';

import "leaflet/dist/leaflet.css"

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let userIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});


L.Marker.prototype.options.icon = userIcon;

function Map(props) {

  const { userCoordinates } = props.data;

  return (
      <MapContainer center={userCoordinates} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={userCoordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;